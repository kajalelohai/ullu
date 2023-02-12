import { ObjectType, ID, Field } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './Exercise';

/**
 * Needs user to guess the complete answer. Follows the straight-forward ask
 * question, get answer, check answer routine. 'Get answer' and 'Check answer'
 * part can be left to the user. e.g usual Anki cards which ask the user how
 * hard answering something was.
 */
@ObjectType()
@Entity()
export class QnAExercise extends Exercise {
  @Field()
  @Column({ type: 'text' })
  question: string;

  @Field()
  @Column({ type: 'text' })
  answer: string;

  // Can the question and answer be flipped?
  @Field((type) => Boolean)
  @Column({ type: 'boolean' })
  isFlippable: Boolean;
}
