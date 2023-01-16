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
  id: string;
  meaning: string;
  gender: Gender;
} & {
  [key in Case]: CountableWord;
};

// Union type for all the kinds of words available for Vocabulary type exercises
export type Vocab = Noun;

export enum Difficulty {
  hard = 'hard',
  normal = 'normal',
  easy = 'easy'
}

export interface LearnedVocab {
  vocabWord: Vocab;
  lastPracticeOn: Date;
  difficulty: Difficulty;
}

export interface SessionHistory {
  startedOn: Date;
  endedOn: Date;
  attemptCount: number;
}
