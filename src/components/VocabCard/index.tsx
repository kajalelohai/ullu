import * as styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import useStore from '../../store';

export function VocabCard() {
  const [word, nextWord] = useStore((state) => [
    state.word,
    state.nextVocabCard
  ]);
  const [example, nextExample] = useStore((s) => [s.example, s.nextExample]);
  const [meaning, isMeaning] = useStore((state) => [
    state.meaning,
    state.displayMeaning
  ]); 
  const showMeaning = useStore((s) => s.showMeaning);

  useEffect(() => {
    nextWord();
  }, []);

  if (!word) {
    return <div className={styles.error}>Something went wrong.</div>;
  }

  return (
    <div id="primary" className={styles.card}>
      <div key={word} className={styles.cardContent}>
        <div className={styles.flippableCardText}>
          {isMeaning ?
          <span className={styles.cardTextBack} onClick={() => {showMeaning()}}>{meaning}</span> :
          <span className={styles.cardTextFront} onClick={() => {showMeaning() }}>{word}</span>
          }
        </div>
        <div className={styles.line} />
        <div className={styles.clickableText} onClick={() => nextExample()}>
          {example ? 'Show another example' : 'Show example'}
        </div>
        <div className={styles.additionalDetails}>
          {' '}
          {example ? example : null}
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
