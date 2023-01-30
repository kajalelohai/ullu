import { ChangeEvent, useCallback } from 'react';
import * as s from './styles.module.scss';
import TextPanel from '../../components/Panels/Text';
import useStore from '../../store';
import Button, { ButtonType } from '../../components/Button';
import { validateVocabBank } from '../../services/vocab';
import SessionPlayer from '../SessionPlayer';
import isBefore from 'date-fns/isBefore';
import formatRelative from 'date-fns/formatRelative';

const Home = () => {
  const vocabBankSize = useStore((s) => Object.keys(s.vocabBank).length);
  const learnedVocabCount = useStore((s) => Object.keys(s.exercises).length);
  const importVocabBank = useStore((s) => s.addToVocabBank);
  const startNewSession = useStore((s) => s.startNewSession);
  const activeSession = useStore((s) => s.activeSession);
  const fatalError = useStore((s) => s.newSessionError);
  const nextSessionOn = useStore((s) => {
    const exercises = Object.values(s.exercises);
    if (!exercises.length) return;
    const nextDue: Date = exercises.reduce(
      (nextDue, ex) => (isBefore(nextDue, ex.due) ? nextDue : ex.due),
      exercises[0].due
    );

    return nextDue;
  });

  const startPractice = useCallback(() => {
    startNewSession();
  }, []);

  const triggerImportVocab = useCallback(() => {
    const fileEl: HTMLInputElement | null =
      document.querySelector('[name=vocab-bank]');
    fileEl?.click();
  }, []);

  const importVocab = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.length ? event.target.files[0] : null;
    if (!file) return;

    file
      .text()
      .then((text) => JSON.parse(text))
      .then(validateVocabBank)
      .then(importVocabBank)
      .catch((err) => {
        console.log('Error during importing vocab bank', err);
      });
  }, []);

  if (activeSession) {
    return <SessionPlayer />;
  }

  return (
    <div>
      <nav className={s.topNav}>
        <div className={s.title}>ULLU</div>
      </nav>

      <div className={s.container}>
        <div className={s.panels}>
          <TextPanel
            className={s.panel}
            text={String(vocabBankSize)}
            subtext={'Total Words'}
          >
            <Button
              className={s.panelAction}
              type={ButtonType.link}
              onClick={triggerImportVocab}
            >
              <label htmlFor="vocab-bank">Add more</label>
              <input
                style={{ display: 'none' }}
                name="vocab-bank"
                type="file"
                accept="application/json"
                onChange={importVocab}
              />
            </Button>
          </TextPanel>
          <TextPanel
            className={s.panel}
            text={String(learnedVocabCount)}
            subtext={'Learned Words'}
          />
        </div>
        <div className={s.info}>
          {nextSessionOn ? (
            <p>
              Next practice session is due{' '}
              <b>{formatRelative(nextSessionOn, new Date())}</b>
            </p>
          ) : null}
        </div>
      </div>
      <div className={s.footer}>
        <Button
          onClick={startPractice}
          disabled={Boolean(
            fatalError ||
              vocabBankSize === 0 ||
              (nextSessionOn && !isBefore(nextSessionOn, new Date()))
          )}
        >
          Start Practice
        </Button>
        {fatalError ? <div className={s.error}>{fatalError}</div> : null}
      </div>
    </div>
  );
};

export default Home;
