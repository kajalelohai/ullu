import { Form } from 'react-router-dom';
import Button, { ButtonType } from '../../components/Button';
import InputField from '~src/components/Panels/Field';
import * as s from './styles.module.scss';

export default function VocabBuilder() {
  return (
    <section className={s.formContainer}>
      <article className={s.formPanel}>
        <h1 className={s.header}>Add Word Details</h1>
        <Form method="post" className={s.formDetails}>
          <div className={s.row}>
            <label htmlFor="word">Word</label>
            <input
              placeholder="Word"
              aria-label="word"
              type="text"
              name="word"
              id="word"
            />
          </div>
          <div className={s.row}>
            <label htmlFor="meaning">Meaning</label>
            <input type="text" id="meaning" name="meaning" placeholder="Meaning"/>
          </div>
          <div className={s.row}>
            <label htmlFor="gender">Gender</label>
            <div className={s.inputGroup}>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Neuter" name="gender" /> Neuter
            </div>
          </div>
          <div className={s.formSection}>
          <div className={s.row}>
            <h4 className={s.inputHeader}>Nominative Case</h4>
            <InputField word='' article=''/>
          </div>
          <div className={s.row}>
            <h3 className={s.inputHeader}>Accusative Case</h3>
            <InputField word='' article='' />
          </div>
          <div className={s.row}>
            <h3 className={s.inputHeader}>Genitive Case</h3>
            <InputField word='' article='' />
          </div>
          <div className={s.row}>
            <h3 className={s.inputHeader}>Dative Case</h3>
            <InputField word='' article='' />
          </div>
          </div>
          <div className={s.formFooter}>
            <Button type={ButtonType.primary} onClick={() => {}} className={s.formSubmit}>Save</Button>
            <Button type={ButtonType.cancel} onClick={() => {}} className={s.formSubmit}>Cancel</Button>
          </div>
        </Form>
      </article>
    </section>
  );
}
