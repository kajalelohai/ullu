import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { Vocab } from './models/Vocab';
import { Session, SessionHistory, newSession, Learned } from './models/Session';

export interface AppState {
  vocabBank: Vocab[];
  activeSession?: Session<Vocab>;
  userProgress: {
    history: SessionHistory[];
    learnedVocab: Learned<Vocab>[];
  };
  addToVocabBank: (newVocab: Vocab[]) => Promise<Vocab[]>;
  newSession: () => Promise<void>;
  clearActiveSession: () => Promise<void>;
}

export default createStore<AppState>()(
  persist(
    immer((set, get) => ({
      vocabBank: [],
      userProgress: {
        history: [],
        learnedVocab: []
      },
      addToVocabBank: async (newVocab) => {
        const bank = get().vocabBank.concat(newVocab);
        const newBank = bank.filter(
          (vocab, index, arr) =>
            arr.findIndex((v) => v.id === vocab.id) === index
        );

        set((s) => {
          s.vocabBank = newBank;
        });

        return newBank;
      },
      newSession: async () => {
        const bank = get().vocabBank;
        const session = await newSession<Vocab>(bank, []);
        set((s) => {
          s.activeSession = session;
        });
      },
      clearActiveSession: async () => {
        set((s) => {
          s.activeSession = undefined;
        });
      }
    })),
    {
      name: 'ullu-da-patha',
      getStorage: () => sessionStorage
    }
  )
);
