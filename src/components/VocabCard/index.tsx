import * as styles from './styles.module.scss';
import { FC, useCallback, useState } from 'react';
import { Vocab } from '../../models/Vocab';
import { SuperMemoGrade } from 'supermemo';

export interface VocabCardProps {
  vocab: Vocab;
  onDone: (grade: SuperMemoGrade) => void;
}

const VocabCard: FC<VocabCardProps> = ({ vocab, onDone }) => {
  const [displayMeaning, setDisplayMeaning] = useState(false);

  const showMeaning = useCallback(() => {
    setDisplayMeaning(!displayMeaning);
  }, [displayMeaning]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.flippableCard}>
          {displayMeaning ? (
            <span className={styles.cardTextBack} onClick={showMeaning}>
              {vocab.meaning}
            </span>
          ) : (
            <span className={styles.cardTextFront} onClick={showMeaning}>
              {`${vocab.nominative.singular.article} ${vocab.nominative.singular.word}`}
            </span>
          )}
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.footer}>
        <button onClick={() => onDone(1)} className={styles.footerButtons}>
          Easy
        </button>
        <button onClick={() => onDone(3)} className={styles.footerButtons}>
          Normal
        </button>
        <button onClick={() => onDone(5)} className={styles.footerButtons}>
          Hard
        </button>
      </div>
      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
};

export default VocabCard;
