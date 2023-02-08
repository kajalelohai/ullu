import { BsChevronLeft } from 'react-icons/bs';
import { Form, Link } from 'react-router-dom';
import Button from '~src/components/Button';
import InputField from '~src/components/Panels/Field';
import * as s from './styles.module.scss';

export default function VocabBuilder() {
  return (
    <section className={s.formContainer}>
      <article className={s.formPanel}>
        <h1 className={s.header}>Add Word Details</h1>
        <Form method="post" className={s.formDetails}>
          <div className={s.row}>
            <label htmlFor="word" className={s.label}>Word</label>
            <input
              placeholder="Word"
              aria-label="word"
              type="text"
              name="word"
              className={s.inputField}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="meaning" className={s.label}>Meaning</label>
            <input type="text" name="meaning" placeholder="meaning" className={s.inputField}/>
          </div>
          <div className={s.row}>
            <label htmlFor="gender" className={s.label}>Gender</label>
            <div>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Neuter" name="gender" /> Neuter
            </div>
          </div>
          <div className={s.row}>
            <h4>Nominative Case</h4>
            <InputField word="Apfel"/>
          </div>
          <div className={s.row}>
            <h3>Accusative Case</h3>
            <InputField word="Apfel" />
          </div>
          <div className={s.row}>
            <h3>Genitive Case</h3>
            <InputField word="Apfel" />
          </div>
          <div className={s.row}>
            <h3>Dative Case</h3>
            <InputField word="Apfel" />
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
          </div>
        </Form>
      </article>
    </section>
  );
}
