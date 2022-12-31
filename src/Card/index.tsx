import { VOCAB_CARDS } from '../data';
import * as styles from './styles.module.scss';

export function Card() {
  return (
    <div id="primary" className={styles.card}>
      {VOCAB_CARDS.map(({ word }) => (
        <div key={word} className={styles.cardContent}>
          <span className={styles.cardText}>{word}</span>
          <div className={styles.line} />
          <div className={styles.clickableText} onClick={() => {}}>
            {'Show Example'}
          </div>
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
