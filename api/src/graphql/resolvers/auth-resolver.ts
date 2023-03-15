import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { User } from '../../entities/User';
import { ResolverContext } from '../../lib/types';
import ServerError from '../../lib/server-error';
import datasource from '../../datasource';

@Resolver((of) => User)
export class AuthResolver {
  private userRepo: Repository<User> = datasource.getRepository(User);

  @Authorized()
  @Query((returns) => User, { nullable: true })
  async me(@Ctx() ctx: ResolverContext) {
    return ctx.session?.user;
  }

  @Mutation((returns) => User)
  async signup(
    @Arg('email') email: string,
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() ctx: ResolverContext
  ): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = await hash(password, 10);
    user.username = username;
    user.roles = ['user'];

    return await user.save();
  }

  @Mutation((returns) => User)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: ResolverContext
  ): Promise<User> {
    const { session } = ctx;
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      if (!user) {
        throw new ServerError('Invalid email/password', {
          status: 403
        });
      }

      const isValidPassword = await compare(password, user.password);
      if (!isValidPassword) {
        throw new ServerError('Invalid email/password', {
          status: 403
        });
      }

      if (user && session) {
        // eslint-disable-next-line no-param-reassign
        (ctx.req as any).test = 'TEST BABY';
        session.user = user;
        console.log('SETTING USER ON SESSION', session);
      }

      return user;
    } catch (error) {
      console.error('[Error] login Mutation', error);
      throw new ServerError(error.message);
    }
  }

  @Authorized()
  @Mutation((returns) => Boolean)
  async logout(@Ctx() ctx: ResolverContext) {
    if (ctx.session) ctx.session = undefined;

    return true;
  }
}
