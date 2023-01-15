import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { LearnedVocab, SessionHistory, Vocab } from './types';

export interface AppState {
  vocabBank: Vocab[];
  activeSession?: {
    pendingVocab: Vocab[];
    doneVocab: Vocab[];
    currentVocab: Vocab;
  };
  userProgress: {
    practiceHistory: SessionHistory[];
    learnedVocab: LearnedVocab[];
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
