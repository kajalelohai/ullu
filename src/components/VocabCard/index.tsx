import * as styles from './styles.module.scss';
import { nextCardPayload } from '../../services/vocab';
import { useEffect } from 'react';
import useStore from '../../store';

export function VocabCard() {
  const [word, nextWord] = useStore((state) => [
    state.word,
    state.nextVocabCard
  ]);

  useEffect(() => {
    nextWord();
  }, []);

  if (!word) {
    return <div className={styles.error}>Something went wrong.</div>;
  }

  return (
    <div id="primary" className={styles.card}>
      <div key={word} className={styles.cardContent}>
        <span className={styles.cardText}>{word}</span>
        <div className={styles.line} />
        <div className={styles.clickableText} onClick={() => {}}>
          {'Show Example'}
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.footerButtons} onClick={() => nextWord()}>
          Easy
        </button>
        <button className={styles.footerButtons} onClick={() => nextWord()}>
          Normal
        </button>
        <button className={styles.footerButtons} onClick={() => nextWord()}>
          Hard
        </button>
      </div>

      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
}
