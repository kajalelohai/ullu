import { BsChevronLeft } from 'react-icons/bs';
import { Form, Link } from 'react-router-dom';
import Button from '~src/components/Button';
import InputField from '~src/components/Panels/Field';
import * as s from './styles.module.scss';

export default function VocabBuilder() {
  return (
    <section>
      <nav className={s.topNav}>
        <Button className={s.backBtn} onClick={() => {}}>
          <Link to="/">
            <BsChevronLeft />
          </Link>
        </Button>
      </nav>
      <article className={s.formPanel}>
        <h1 className={s.header}>Add Word Details</h1>
        <Form method="post" id="contact-form">
          <p>
            <label htmlFor="word">Word</label>
            <input
              placeholder="Word"
              aria-label="word"
              type="text"
              name="word"
            />
          </p>
          <label>
            <label htmlFor="meaning">Meaning</label>
            <input type="text" name="meaning" placeholder="meaning" />
          </label>
          <label>
            <label htmlFor="gender">Gender</label>
            <div>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Neuter" name="gender" /> Neuter
            </div>
          </label>
          <label>
            <h3>Nominative Case</h3>
            <InputField word="Apfel" />
          </label>
          <label>
            <h3>Accusative Case</h3>
            <InputField word="Apfel" />
          </label>
          <label>
            <h3>Genitive Case</h3>
            <InputField word="Apfel" />
          </label>
          <label>
            <h3>Dative Case</h3>
            <InputField word="Apfel" />
          </label>
          <p>
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
          </p>
        </Form>
      </article>
    </section>
  );
}
