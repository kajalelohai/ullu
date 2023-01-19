import { Difficulty, SessionHistory } from "./Session";

export enum Gender {
  masculine = 'masculine',
  feminine = 'feminine',
  neuter = 'neuter'
}

export enum Case {
  accusative = 'accusative',
  nominative = 'nominative',
  dative = 'dative',
  genitive = 'genitive'
}

export interface Word {
  article: string;
  word: string;
}

export interface CountableWord {
  singular: Word;
  plural: Word;
}

export type Noun = {
  // TODO Add `display`, which is id but preserves case
  id: string;
  // TODO move meaning to its own type as a `Translation`
  meaning: string;
  gender: Gender;
} & {
  [key in Case]: CountableWord;
};

// Union type for all the kinds of words available for Vocabulary type exercises
export type Vocab = Noun;
