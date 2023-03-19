import { ResolverContext } from 'src/lib/types';
import {
  Resolver,
  Query,
  Mutation,
  InputType,
  Arg,
  Field,
  Ctx,
  Authorized
} from 'type-graphql';
import { Context } from 'vm';
import { QnAExercise } from '../../entities/QnAExercise';

@InputType({ description: 'Add or update a QnAExercise' })
class QnAExerciseInput implements Partial<QnAExercise> {
  @Field()
  question: string;

  @Field()
  answer: string;
}

@Resolver((of) => QnAExercise)
export class QnAResolver {
  @Authorized()
  @Query((returns) => [QnAExercise], { nullable: false })
  async allExercises(@Ctx() ctx: Context): Promise<QnAExercise[]> {
    const exs = await QnAExercise.findBy({ author: ctx.user });

    return exs.map((ex) => {
      ex.attachments ||= [];
      ex.author = ctx.user;
      return ex;
    });
  }

  @Authorized()
  @Mutation((returns) => QnAExercise)
  async exercise(
    @Arg('data') qnaInput: QnAExerciseInput,
    @Ctx() ctx: ResolverContext
  ): Promise<QnAExercise> {
    const ex = new QnAExercise();
    const user = ctx.session.user;

    ex.question = qnaInput.question;
    ex.answer = qnaInput.answer;
    ex.author = user;
    // TODO: Figure out how we can get an array as default instead of doing this
    ex.attachments ||= [];

    await ex.save();

    return ex;
  }
}
