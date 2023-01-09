import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nextCardPayload, fetchNextExample } from './services/vocab';

interface AppState {
  word: string;
  meaning: string;
  example: string;
  displayMeaning: boolean;
  nextVocabCard: () => Promise<void>;
  nextExample: () => Promise<void>;
  showMeaning: () => Promise<void>;
}

export default createStore<AppState>()(
  immer((set, get) => ({
    word: '',
    meaning: '',
    example: '',
    displayMeaning: false,
    nextVocabCard: async () => {
      const next = await nextCardPayload();
      set({word: next.word, meaning: next.meaning, displayMeaning: false});
    },
    nextExample: async () => {
      const example = await fetchNextExample(get().word);
      set({ example: example.body });
    },
    showMeaning: async () => {
      set({displayMeaning: !get().displayMeaning})
    }
  }))
);
