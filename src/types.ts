export interface FlashCardPayload {}

export interface VocabCardPayload extends FlashCardPayload {
  word: string;
  meaning: string;
}

export interface VocabExample {
  id: string;
  body: string;
  words: string[];
}

export enum Gender {
  masculine = 'male',
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
export type VocabWord = Noun;

export enum Difficulty {
  hard = 'hard',
  normal = 'normal',
  easy = 'easy'
}

export interface LearnedVocabWord {
  vocabWord: VocabWord;
  lastPracticeOn: Date;
  difficulty: Difficulty;
}

export interface SessionHistory {
  startedOn: Date;
  endedOn: Date;
  attemptCount: number;
}
