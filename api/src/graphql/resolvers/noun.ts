import { Resolver, Query } from 'type-graphql';
import { Noun } from '../../entities/Noun';

@Resolver((of) => Noun)
export class NounResolver {
  private readonly items: Noun[] = [];

  @Query((returns) => Noun, { nullable: true })
  async noun(): Promise<Noun | undefined> {
    return this.items[0];
  }
}
