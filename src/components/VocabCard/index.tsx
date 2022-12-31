import * as styles from './styles.module.scss';
import { nextCardPayload } from '../../services/vocab';
import { useEffect, useState } from 'react';
import { VocabCardPayload } from '../../types';

export function VocabCard() {
  const [cardPayload, setCardPayload] = useState<VocabCardPayload | null>(null);

  useEffect(() => {
    nextCardPayload().then((card) => {
      setCardPayload(card);
    });
  }, []);

  if (!cardPayload) {
    return <div className={styles.error}>Something went wrong.</div>;
  }

  return (
    <div id="primary" className={styles.card}>
      <div key={cardPayload.word} className={styles.cardContent}>
        <span className={styles.cardText}>{cardPayload.word}</span>
        <div className={styles.line} />
        <div className={styles.clickableText} onClick={() => {}}>
          {'Show Example'}
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.footerButtons}>Easy</button>
        <button className={styles.footerButtons}>Normal</button>
        <button className={styles.footerButtons}>Hard</button>
      </div>

      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
}
