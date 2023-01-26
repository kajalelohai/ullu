import * as s from './styles.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Button from '../../components/Button';
import VocabCard from '../../components/VocabCard';
import useStore from '../../store';

function SessionPlayer() {
  const clearSession = useStore((s) => s.clearActiveSession);
  const finishSession = useStore((s) => s.finishActiveSession);
  const solveExercise = useStore((s) => s.solveExercise);
  const exercise = useStore((s) => {
    const pendingExs = Object.values(s.activeSession?.session.pending || {});
    return pendingExs.length ? pendingExs[0] : null;
  });

  if (!exercise) {
    finishSession();
    return null;
  }

  return (
    <section>
      <nav className={s.topNav}>
        <Button className={s.backBtn} onClick={clearSession}>
          <BsChevronLeft />
        </Button>
      </nav>

      <article className={s.playArea}>
        <VocabCard
          onDone={(d) => {
            solveExercise(exercise, d);
          }}
          vocab={exercise.self}
        />
      </article>

      <footer className={s.footer}></footer>
    </section>
  );
}

export default SessionPlayer;
