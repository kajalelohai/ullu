import { ChangeEvent, useCallback } from 'react';
import * as s from './styles.module.scss';
import TextPanel from '../../components/Panels/Text';
import useStore from '../../store';
import Button, { ButtonType } from '../../components/Button';
import { validateVocabBank } from '../../services/vocab';

const Home = () => {
  const vocabBankSize = useStore((s) => s.vocabBank.length);
  const learnedVocabCount = useStore((s) => s.userProgress.learnedVocab.length);
  const importVocabBank = useStore((s) => s.addToVocabBank);
  const startNewSession = useStore((s) => s.newSession);
  const activeSession = useStore((s) => s.activeSession);

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
    return <div>Do {activeSession.pending.length} exercises!</div>;
  }

  return (
    <div>
      <nav className={s.topNav}>
        <div className={s.title}>ULLU</div>
      </nav>

      <div className={s.container}>
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
      <div className={s.footer}>
        <Button onClick={startPractice} disabled={vocabBankSize === 0}>
          Start Practice
        </Button>
      </div>
    </div>
  );
};

export default Home;
