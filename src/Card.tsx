import { WORDBOOK } from './data';
import styles from './Card.module.css';
import { useState } from 'react';

export function Card() {
  const [displayExamples, setDisplayExamples] = useState(false);

  return (
    <div id="primary" className={styles.card}>
      {WORDBOOK.map((word, index) => (
        <div key={index} className={styles.cardContent}>
        <span className={styles.cardText}>{word.word}</span>
        <div className={styles.line}/>
        <div className={styles.clickableText} onClick={() => setDisplayExamples(!displayExamples)}>{`${displayExamples ? 'Another' : 'Show'} Example`}</div>
        <div className={styles.cardDetails}>{displayExamples && word.sentences[0]}</div>
        </div>
      ))}
      <div className={styles.footer}>
        <button className={styles.footerButtons}>Easy</button>
        <button className={styles.footerButtons}>Normal</button>
        <button className={styles.footerButtons}>Hard</button>
      </div>
      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
}
