import { Resolver, Query } from 'type-graphql';
import { QnAExercise } from '../../entities/QnAExercise';

@Resolver((of) => QnAExercise)
export class QnAResolver {
  @Query((returns) => [QnAExercise], { nullable: false })
  async allExercises(): Promise<QnAExercise[]> {
    return [];
  }
}
