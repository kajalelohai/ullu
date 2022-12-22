import { WORDBOOK } from './data';

export function Card() {
  return (
    <div>
      {WORDBOOK.map((frag) => (
        <span>{frag.word}</span>
      ))}
    </div>
  );
}
