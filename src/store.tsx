import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { LearnedVocabWord, SessionHistory, VocabWord } from './types';

export interface AppState {
  vocabBank: VocabWord[];
  activeSession?: {
    pendingVocab: VocabWord[];
    doneVocab: VocabWord[];
    currentWord: VocabWord;
  };
  userProgress: {
    practiceHistory: SessionHistory[];
    learnedVocab: LearnedVocabWord[];
  };
}

export default createStore<AppState>()(
  immer((set, get) => ({
    vocabBank: [],
    activeSession: undefined,
    userProgress: {
      practiceHistory: [],
      learnedVocab: []
    }
  }))
);
