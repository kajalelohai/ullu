import * as styles from './styles.module.scss';
import { nextCardPayload } from '../../services/vocab';
import { useEffect } from 'react';
import useStore from '../../store';

export function VocabCard() {
  const word = useStore(state => state.word);
  const updateVocabCard = useStore(state => state.updateVocabCard);
   
  useEffect(() => {
    nextCardPayload().then((card) => {
      updateVocabCard(card);
    });
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
        <button className={styles.footerButtons}>Easy</button>
        <button className={styles.footerButtons}>Normal</button>
        <button className={styles.footerButtons}>Hard</button>
      </div>

      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
}
