import * as s from './styles.module.scss';
import React, { FC, useCallback, useState } from 'react';
import { Vocab } from '../../models/Vocab';
import { SuperMemoGrade } from 'supermemo';
import Button from '../Button';

export interface VocabCardProps {
  vocab: Vocab;
  onDone: (grade: SuperMemoGrade) => void;
}

const VocabCard: FC<VocabCardProps> = ({ vocab, onDone }) => {
  const [displayMeaning, setDisplayMeaning] = useState(false);

  const showMeaning = useCallback(() => {
    setDisplayMeaning(!displayMeaning);
  }, [displayMeaning]);

  const onSubmitResult = useCallback(
    (rank: SuperMemoGrade) => {
      return (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onDone(rank);
        setDisplayMeaning(false);
      };
    },
    [displayMeaning]
  );

  return (
    <div className={s.cardContainer}>
      <div className={s.flippableCard}>
        {displayMeaning ? (
          <div className={s.cardTextBack} onClick={showMeaning}>
            {vocab.meaning}
          </div>
        ) : (
          <div className={s.cardTextFront} onClick={showMeaning}>
            {`${vocab.nominative.singular.article} ${vocab.nominative.singular.word}`}
          </div>
        )}
      </div>
      <div className={s.footer}>
        <Button onClick={onSubmitResult(1)} className={s.footerButtons}>
          Easy
        </Button>
        <Button onClick={onSubmitResult(3)} className={s.footerButtons}>
          Normal
        </Button>
        <Button onClick={onSubmitResult(5)} className={s.footerButtons}>
          Hard
        </Button>
      </div>
      <div className={s.note}>How hard was guessing it?</div>
    </div>
  );
};

export default VocabCard;
