import { WORDBOOK } from './data';
import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles.card}>
      {WORDBOOK.map((frag) => (
        <span className={styles.cardText}>{frag.word}</span>
      ))}
      <div className={styles.footer}>
        <button className={styles.footerButtons}>Easy</button>
        <button className={styles.footerButtons}>Normal</button>
        <button className={styles.footerButtons}>Hard</button>
      </div>
    </div>
  );
}
