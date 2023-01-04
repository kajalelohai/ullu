import { VocabCardPayload, VocabExample } from '../types';

const VOCAB_CARDS: VocabCardPayload[] = [
  {
    word: 'sehr',
    meaning: 'very'
  },
  {
    word: 'Tschüss',
    meaning: 'bye'
  },
  {
    word: 'Einen',
    meaning: 'one'
  },
  {
    word: 'Darf',
    meaning: 'may'
  },
  {
    word: 'Wochenende',
    meaning: 'weekend'
  },
  {
    word: 'Fahre',
    meaning: 'travel/Drive'
  },
  {
    word: 'Zimmer',
    meaning: 'room'
  },
  {
    word: 'Proscht',
    meaning: 'cheers'
  },
  {
    word: 'Arzt',
    meaning: 'doctor'
  },
  {
    word: 'Hochschule',
    meaning: 'university'
  }
];

const Examples: VocabExample[] = [
  { id: '1', body: 'Der Hund ist sehr gut', words: ['sehr', 'hund'] },
  { id: '2', body: 'Die tasche ist sehr tuer', words: ['sehr', 'tuer'] },
  { id: '3', body: 'Das spitzer ist sehr billig', words: ['sehr', 'billig'] }
];

export const nextCardPayload = async (): Promise<VocabCardPayload> => {
  return VOCAB_CARDS[Math.floor(Math.random() * 100) % VOCAB_CARDS.length];
};
