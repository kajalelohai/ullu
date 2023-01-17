import produce from 'immer';
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
  addToVocabBank: (newVocab: Vocab[]) => Promise<Vocab[]>;
}

export default createStore<AppState>()(
  immer((set, get) => ({
    vocabBank: [],
    activeSession: undefined,
    userProgress: {
      practiceHistory: [],
      learnedVocab: []
    },
    addToVocabBank: async (newVocab) => {
      const bank = get().vocabBank.concat(newVocab);
      const newBank = bank.filter(
        (vocab, index, arr) => arr.findIndex((v) => v.id === vocab.id) === index
      );

      set((s) => {
        s.vocabBank = newBank;
      });

      return newBank;
    }
  }))
);
