import * as s from './styles.module.scss';
import TextPanel from '../../components/Panels/Text';
import useStore from '../../store';

const Home = () => {
  const vocabBankSize = useStore((s) => s.vocabBank.length);

  return (
    <div>
      <nav className={s.topNav}>
        <div className={s.title}>ULLU</div>
      </nav>

      <div className={s.container}>
        <TextPanel text={vocabBankSize} subtext={'Total Words'} />
      </div>
    </div>
  );
};

export default Home;
