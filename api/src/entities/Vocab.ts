import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, BaseEntity } from "typeorm";

import { User } from "./User";

@Entity()
@ObjectType()
export class Vocab extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Field()
  @Column()
  meaning: string;

  @Field(type => User)
  @ManyToOne(type => User)
  author: User;
  @RelationId((vocab: Vocab) => vocab.author)
  authorId: string;
}
