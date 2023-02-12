// Perhaps it'd be a good idea to keep words in a more flat structure. Something like

class WordVariant {
  type: string;
  display: string;
}

export class Word {
  id: string;
  variants: WordVariant[];
}

const vater = new Word();
vater.id = 'vater';

const nominative = new WordVariant();
nominative.type = 'nominative';
nominative.display = 'Vater';
vater.variants.push(nominative);
