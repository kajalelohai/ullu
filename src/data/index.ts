interface IWordsCollection {
  word: string;
  meaning: string;
  sentences: string[];
  status: string;
}

export const WORDS_COLLECTION: IWordsCollection[] = [{
  word: 'sehr',
  meaning: 'very',
  sentences: ['der Hund ist sehr gut', 'die tasche ist sehr tuer'],
  status: '1'
}];