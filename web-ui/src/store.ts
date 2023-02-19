import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Vocab, Word } from '~src/models/Vocab';
import {
  Session,
  newSession,
  Exercise,
  solveExercise
} from '~src/models/Session';
import { Record } from './types';
import { SuperMemoGrade } from 'supermemo';
import { recordify } from './utils';

export interface AppState {
  vocabBank: Record<Vocab>;
  exercises: Record<Exercise>;
  activeSession?: Session;
  completedSessions: Record<Session>;
  addToVocabBank: (newVocab: Vocab[]) => Promise<void>;
  newSessionError?: string;
  startNewSession: () => Promise<void>;
  clearActiveSession: () => Promise<void>;
  finishActiveSession: () => Promise<void>;
  solveExercise: (exId: string, grade: SuperMemoGrade) => Promise<void>;
  word?: Word;
}

export default createStore<AppState>()(
  persist(
    immer((set, get) => ({
      vocabBank: {},
      exercises: {},
      completedSessions: {},
      addToVocabBank: async (newVocab) => {
        const bank = [...Object.values(get().vocabBank), ...newVocab];
        const newBank = recordify(
          bank.filter(
            (vocab, index, arr) =>
              arr.findIndex((v) => v.id === vocab.id) === index
          )
        );

        set((s) => {
          s.newSessionError = undefined;
          s.vocabBank = newBank;
        });
      },
      startNewSession: async () => {
        const state = get();
        try {
          const { session, newExercises } = await newSession<Vocab>(
            state.vocabBank,
            state.exercises
          );

          set((s) => {
            s.exercises = { ...s.exercises, ...newExercises };
            s.activeSession = session;
          });
        } catch (err: unknown) {
          set((s) => {
            if (err instanceof Error) {
              s.newSessionError = err.message;
            }
          });
        }
      },
      clearActiveSession: async () => {
        set((s) => {
          s.activeSession = undefined;
        });
      },
      finishActiveSession: async () => {
        set((s) => {
          if (!s.activeSession) return;

          console.log({ activeSession: JSON.stringify(s.activeSession) });

          s.activeSession.endedOn = new Date();
          s.completedSessions[s.activeSession.id] = s.activeSession;

          s.activeSession = undefined;
        });
      },
      solveExercise: async function (exId, grade) {
        set((state) => {
          if (!state.activeSession) {
            throw new Error('No active session');
          }

          const exercise = state.exercises[exId];

          if (!exercise) {
            throw new Error('Exercise not found in current session.');
          }

          state.exercises[exId] = solveExercise(exercise, grade);
          state.activeSession.exerciseIds =
            state.activeSession.exerciseIds.filter((id: string) => id !== exId);
        });
      }
    })),
    {
      name: 'ullu-da-patha',
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => {
        return (state) => {
          if (!state) return;
          state.exercises = Object.fromEntries(
            Object.entries(state.exercises).map(([k, v]) => [
              k,
              { ...v, due: new Date(v.due) }
            ])
          );
        };
      }
    }
  )
);
