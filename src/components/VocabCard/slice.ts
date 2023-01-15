import { VocabCardPayload } from '../../types';
import { nextCardPayload, fetchNextExample } from '../../services/vocab';
import { StateCreator } from 'zustand';
import { AppState } from '../../store';

export interface VocabCardState {
  word: string;
  meaning: string;
  example: string;
  vocabList: VocabCardPayload[];
  displayMeaning: boolean;
  nextVocabCard: () => Promise<void>;
  nextExample: () => Promise<void>;
  showMeaning: () => Promise<void>;
}

const vocabSlice: StateCreator<AppState, [], [], VocabCardState> = (
  set,
  get
) => {
  return {
    word: '',
    meaning: '',
    example: '',
    vocabList: [],
    displayMeaning: false,
    nextVocabCard: async () => {
      const next = await nextCardPayload();
      console.log({ next });
      set((state) => {
        state.vocab.word = next.word;
        state.vocab.meaning = next.meaning;
        state.vocab.displayMeaning = false;

        return state;
      });
    },
    nextExample: async () => {
      const example = await fetchNextExample(get().word);
      set((state) => {
        state.vocab.example = example.body;
        return state;
      });
    },
    showMeaning: async () => {
      set((state) => {
        state.vocab.displayMeaning = !get().vocab.displayMeaning;
        return state;
      });
    }
  };
};

export default vocabSlice;
