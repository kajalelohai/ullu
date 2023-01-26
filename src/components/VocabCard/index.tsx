import * as styles from './styles.module.scss';
import { FC, useState } from 'react';
import { Vocab } from '../../models/Vocab';

export interface VocabCardProps {
  vocab: Vocab;
}

const VocabCard: FC<VocabCardProps> = ({ vocab }) => {
  const [displayMeaning, setDisplayMeaning] = useState(false);

  const showMeaning = () => {
    setDisplayMeaning(!displayMeaning);
  };

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
              {vocab.display}
            </span>
          )}
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.footer}>
        <button className={styles.footerButtons}>Easy</button>
        <button className={styles.footerButtons}>Normal</button>
        <button className={styles.footerButtons}>Hard</button>
      </div>
      <div className={styles.note}>How hard was guessing it?</div>
    </div>
  );
};

export default VocabCard;
