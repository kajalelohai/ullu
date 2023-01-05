import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nextCardPayload, fetchNextExample } from './services/vocab';

interface AppState {
  word: string;
  meaning: string;
  example: string;
  nextVocabCard: () => Promise<void>;
  nextExample: () => Promise<void>;
}

export default createStore<AppState>()(
  immer((set, get) => ({
    word: '',
    meaning: '',
    example: '',
    nextVocabCard: async () => {
      const next = await nextCardPayload();
      set(next);
    },
    nextExample: async () => {
      const example = await fetchNextExample(get().word);
      set({ example: example.body });
    }
  }))
);
