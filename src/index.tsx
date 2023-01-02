import { createRoot } from 'react-dom/client';
import { VocabCard } from './components/VocabCard';
import create from 'zustand';

type UpdateVocabPayload = {
  word: string;
  meaning: string;
};

interface VocabStore {
  word: string;
  meaning: string;
  updateVocabCard: ({ word, meaning }: UpdateVocabPayload) => void;
}

export const useVocabStore = create<VocabStore>((set) => ({
  word: '',
  meaning: '',
  updateVocabCard: (card) =>
    set((state) => ({ ...state, word: card.word, meaning: card.meaning }))
}));

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<VocabCard />);
