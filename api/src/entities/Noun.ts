import { IsIn } from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
  BaseEntity
} from 'typeorm';

import { User } from './User';

@ObjectType()
class Word {
  @Field()
  article: string;

  @Field()
  word: string;
}

@ObjectType()
class CountableWord {
  @Field()
  singular: Word;

  @Field()
  plural: Word;
}

@Entity()
@ObjectType()
export class Noun extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Field()
  @Column()
  meaning: string;

  @Field()
  @Column()
  @IsIn(['masculine', 'feminine', 'neuter'])
  gender: string;

  @Field((type) => CountableWord)
  @Column('simple-json')
  nominative: CountableWord;

  @Field((type) => CountableWord)
  @Column('simple-json')
  accusative: CountableWord;

  @Field((type) => CountableWord)
  @Column('simple-json')
  dative: CountableWord;

  @Field((type) => CountableWord)
  @Column('simple-json')
  genitive: CountableWord;

  @Field((type) => User)
  @ManyToOne((type) => User)
  author: User;
  @RelationId((noun: Noun) => noun.author)
  authorId: string;
}
