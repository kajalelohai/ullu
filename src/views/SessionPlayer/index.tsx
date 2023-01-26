import * as s from './styles.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Button from '../../components/Button';
import VocabCard from '../../components/VocabCard';
import useStore from '../../store';

function SessionPlayer() {
  const session = useStore((s) => s.activeSession);
  const clearSession = useStore((s) => s.clearActiveSession);

  if (!session) {
    throw new Error('No session to play 😭');
  }

  return (
    <section>
      <nav className={s.topNav}>
        <Button className={s.backBtn} onClick={clearSession}>
          <BsChevronLeft />
        </Button>
      </nav>

      <VocabCard vocab={session.pending[0].self} />

      <footer className={s.footer}></footer>
    </section>
  );
}

export default SessionPlayer;
