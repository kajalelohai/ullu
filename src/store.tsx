import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nextCardPayload } from './services/vocab';

interface AppState {
  word: string;
  meaning: string;
  nextVocabCard: () => Promise<void>;
}

export default createStore<AppState>()(
  immer((set) => ({
    word: '',
    meaning: '',
    nextVocabCard: async () => {
      const next = await nextCardPayload();
      set(next);
    }
  }))
);
