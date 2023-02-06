import * as s from './styles.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Button from '../../components/Button';
import VocabCard from '../../components/VocabCard';
import useStore from '../../store';
import { Link } from 'react-router-dom';

function SessionPlayer() {
  const clearSession = useStore((s) => s.clearActiveSession);
  const finishSession = useStore((s) => s.finishActiveSession);
  const solveExercise = useStore((s) => s.solveExercise);
  const exercise = useStore((s) => {
    const exId = s.activeSession?.exerciseIds[0];
    return exId ? s.exercises[exId] : null;
  });
  const vocab = useStore((s) => {
    return exercise ? s.vocabBank[exercise.itemId] : null;
  });

  if (!exercise || !vocab) {
    // Really hacky way of finishing a session
    finishSession();
    return null;
  }

  return (
    <section>
      <nav className={s.topNav}>
        <Button className={s.backBtn} onClick={clearSession}>
        <Link to="/"><BsChevronLeft /></Link>
        </Button>
      </nav>

      <article className={s.playArea}>
        <VocabCard
          onDone={(d) => {
            solveExercise(exercise.itemId, d);
          }}
          vocab={vocab}
        />
      </article>

      <footer className={s.footer}></footer>
    </section>
  );
}

export default SessionPlayer;
