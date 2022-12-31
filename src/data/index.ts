interface FlashCard {}

interface VocabCard extends FlashCard {
  word: string;
  meaning: string;
}

interface VocabExample {
  id: string;
  body: string;
  words: string[];
}

export const VOCAB_CARDS: VocabCard[] = [
  {
    word: 'sehr',
    meaning: 'very'
  }
];

export const Examples: VocabExample[] = [
  { id: '1', body: 'Der Hund ist sehr gut', words: ['sehr', 'hund'] },
  { id: '2', body: 'Die tasche ist sehr tuer', words: ['sehr', 'tuer'] },
  { id: '3', body: 'Das spitzer ist sehr billig', words: ['sehr', 'billig'] }
];
