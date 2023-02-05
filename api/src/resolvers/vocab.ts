import {
  Resolver,
  Query,
} from "type-graphql";

import { Vocab } from "../entities/Vocab";

@Resolver(of => Vocab)
export class VocabResolver  {
  private readonly items: Vocab[] = [];

  @Query(returns => Vocab, { nullable: true })
  async vocab(): Promise<Vocab | undefined> {
    return this.items[0]
  }
}
