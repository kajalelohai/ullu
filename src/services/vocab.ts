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
  },
  {
    word: 'Erwachsene',
    meaning: 'adult'
  },
  {
    word: 'Flugzeug',
    meaning: 'airplane'
  },
  {
    word: 'Arm',
    meaning: 'Arm'
  },
  {
    word: 'Baby',
    meaning: 'Baby'
  },
  {
    word: 'Rücken',
    meaning: 'back'
  },
  {
    word: 'Badezimmer',
    meaning: 'Bathroom'
  },
  {
    word: 'Bett',
    meaning: 'Bed'
  },
  {
    word: 'Schlaftzimmer',
    meaning: 'Bedroom'
  },
  {
    word: 'Rindfleisch',
    meaning: 'Beef'
  },
  {
    word: 'Bier',
    meaning: 'Beer'
  },
  {
    word: 'Fahrrad',
    meaning: 'bicycle'
  }
];
  
const EXAMPLES: VocabExample[] = [
  { id: '1', body: 'Der Hund ist sehr gut', words: ['sehr', 'hund'] },
  { id: '2', body: 'Die tasche ist sehr tuer', words: ['sehr', 'tuer'] },
  { id: '3', body: 'Das spitzer ist sehr billig', words: ['sehr', 'billig'] }
];

export const nextCardPayload = async (): Promise<VocabCardPayload> => {
  return VOCAB_CARDS[Math.floor(Math.random() * 100) % VOCAB_CARDS.length];
};

export const fetchNextExample = async (word: string): Promise<VocabExample> => {
  return EXAMPLES[Math.floor(Math.random() * 100) % EXAMPLES.length];
};
