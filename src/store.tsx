import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { Vocab } from './models/Vocab';
import {
  Session,
  SessionHistory,
  newSession,
  Learned,
  Exercise,
  Difficulty
} from './models/Session';

export interface AppState {
  vocabBank: { [id: string]: Vocab };
  activeSession?: {
    startedOn: Date;
    session: Session<Vocab>;
  };
  userProgress: {
    history: SessionHistory[];
    learnedVocab: { [id: string]: Learned<Vocab> };
  };
  addToVocabBank: (newVocab: Vocab[]) => Promise<void>;
  newSession: () => Promise<void>;
  clearActiveSession: () => Promise<void>;
  finishActiveSession: () => Promise<void>;
  solveExercise: (ex: Exercise<Vocab>, diff: Difficulty) => Promise<void>;
}

export default createStore<AppState>()(
  persist(
    immer((set, get) => ({
      vocabBank: {},
      userProgress: {
        history: [],
        learnedVocab: {}
      },
      addToVocabBank: async (newVocab) => {
        const bank = Object.entries(get().vocabBank)
          .map(([_k, v]) => v)
          .concat(newVocab);
        const newBank = bank
          .filter(
            (vocab, index, arr) =>
              arr.findIndex((v) => v.id === vocab.id) === index
          )
          .reduce((acc, v) => ({ ...acc, [v.id]: v }), {});

        set((s) => {
          s.vocabBank = newBank;
        });
      },
      newSession: async () => {
        const bank = get().vocabBank;
        const session = await newSession<Vocab>(bank, {});
        set((s) => {
          s.activeSession = {
            startedOn: new Date(),
            session
          };
        });
      },
      clearActiveSession: async () => {
        set((s) => {
          s.activeSession = undefined;
        });
      },
      finishActiveSession: async () => {
        set((s) => {
          if (!s.activeSession) return;

          const startedOn = s.activeSession?.startedOn;
          const endedOn = new Date();
          const latestSession = {
            startedOn,
            endedOn,
            sessionId: s.activeSession.session.id
          };

          Object.values(s.activeSession.session.done).forEach((ex) => {
            const vocab = ex.self;
            s.userProgress.learnedVocab[vocab.id] = {
              ...ex,
              latestSession
            };
          });

          s.userProgress.history.push(latestSession);
          s.activeSession = undefined;
        });
      },
      solveExercise: async function (ex, diff) {
        set((state) => {
          if (!state.activeSession) {
            throw new Error('No active session');
          }

          const exercise = state.activeSession?.session.pending[ex.self.id];

          if (!exercise) {
            throw new Error('Exercise not found in current session.');
          }
          exercise.difficulty = diff;
          state.activeSession!.session.done[ex.self.id] = ex;
          delete state.activeSession!.session.pending[ex.self.id];
        });
      }
    })),
    {
      name: 'ullu-da-patha',
      getStorage: () => sessionStorage
    }
  )
);
