import { Session } from '../../models/Session';
import * as s from './styles.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Button from '../Button';

interface SessionPlayerProps<T> {
  session: Session<T>;
  onClearSession: () => void;
}

function SessionPlayer<T>({
  session,
  onClearSession: clearSession
}: SessionPlayerProps<T>) {
  return (
    <section>
      <nav className={s.topNav}>
        <Button className={s.backBtn} onClick={clearSession}>
          <BsChevronLeft />
        </Button>
      </nav>
      <footer className={s.footer}></footer>
    </section>
  );
}

export default SessionPlayer;
