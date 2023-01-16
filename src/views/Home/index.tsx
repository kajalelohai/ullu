import { useCallback } from 'react';
import * as s from './styles.module.scss';
import TextPanel from '../../components/Panels/Text';
import useStore from '../../store';
import Button, { ButtonType } from '../../components/Button';

const Home = () => {
  const vocabBankSize = useStore((s) => s.vocabBank.length);
  const learnedVocabCount = useStore(
    (s) => s.userProgress.practiceHistory.length
  );

  const startPractice = useCallback(() => {
    console.log('Start practice!');
  }, []);

  const importVocab = useCallback(() => {
    console.log('Import Vocab');
  }, []);

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
            onClick={importVocab}
          >
            Add more
          </Button>
        </TextPanel>
        <TextPanel
          className={s.panel}
          text={String(learnedVocabCount)}
          subtext={'Learned Words'}
        />
      </div>
      <div className={s.footer}>
        <Button onClick={startPractice} disabled>
          Start Practice
        </Button>
      </div>
    </div>
  );
};

export default Home;
