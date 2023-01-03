import createStore from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UpdateVocabPayload = {
  word: string;
  meaning: string;
};

interface VocabStore {
  word: string;
  meaning: string;
  updateVocabCard: ({ word, meaning }: UpdateVocabPayload) => void;
}

export default createStore<VocabStore>()(
  immer((set) => ({
  word: '',
  meaning: '',
  updateVocabCard: (card) =>
    set((state) => ({ ...state, word: card.word, meaning: card.meaning }))
}))
);