/*
 * Perhaps it makes most sense to have Exercises right out of the gate. That way
 * we can start with something useable, and then add more content to it.
 */

import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './User';

enum AttachmentType {
  Video = 'VIDEO',
  Audio = 'AUDIO',
  Image = 'IMAGE'
}

@ObjectType()
@Entity()
export class Attachment extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({ type: 'text', enum: AttachmentType })
  type: AttachmentType;

  @Field()
  @Column({ type: 'text' })
  description?: string;

  exercise: Exercise;
}

enum ExerciseGrade {
  BLACKOUT = 0,
  INCORRECT_BUT_GUESSED = 1,
  INCORRECT_BUT_REMEMBERED = 2,
  CORRECT_BUT_HARD = 3,
  CORRECT = 4,
  EASY = 5
}

@ObjectType()
@Entity()
export class Exercise extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Inter-repetition interval after the repetitions (in days)
  @Field()
  @Column({ type: 'int' })
  interval: number = 0;

  // The number of continuous correct responses.
  @Field()
  @Column({ type: 'int' })
  repetition: number = 0;

  // Easiness factor reflecting the easiness of memorizing
  @Field()
  @Column({ type: 'int' })
  easinessFactor: number = 2.5;

  // 5: perfect response.
  // 4: correct response after a hesitation.
  // 3: correct response recalled with serious difficulty.
  // 2: incorrect response; where the correct one seemed easy to recall.
  // 1: incorrect response; the correct one remembered.
  // 0: complete blackout
  @Field()
  @Column({
    type: 'int',
    enum: ExerciseGrade,
    default: ExerciseGrade.BLACKOUT
  })
  grade: ExerciseGrade = ExerciseGrade.BLACKOUT;

  @Field()
  @Column({ type: 'date' })
  dueOn: Date;

  @Field((type) => [Attachment])
  @OneToMany(() => Attachment, (att) => att.exercise)
  attachments: Attachment[];

  @Field()
  @ManyToOne(() => User)
  author: User;
}

export class ExerciseLog {
  exercise: Exercise;
  practicedOn: Date;
  grade: number;
}
