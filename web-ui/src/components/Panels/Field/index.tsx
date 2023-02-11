import * as s from './styles.module.scss';

export enum Articles {
  der = 'der',
  die = 'die',
  das = 'das',
  den = 'den',
  dem = 'dem',
  des = 'des',
  ein = 'ein',
  eine = 'eine',
  eines = 'eines',
  einem = 'einem',
  einer = 'einer',
  einen = 'einen',
  einige = 'einige',
  einiger = 'einiger',
  einigen = 'einigen'
}

const articlesList: Articles[] = [
  Articles.der,
  Articles.die,
  Articles.das,
  Articles.den,
  Articles.dem,
  Articles.des,
  Articles.ein,
  Articles.eine,
  Articles.eines,
  Articles.einem,
  Articles.einer,
  Articles.einen,
  Articles.einige,
  Articles.einiger,
  Articles.einigen
];

export interface InputFieldProps {
  word: string;
  article?: string;
  className?: string;
  children?: React.ReactNode;
  handleChange?: () => void;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  word,
  article,
  handleChange,
  className = ''
}) => {
  return (
    <div className={`${s.inputFieldSet} ${className}`}>
      <div className={s.selectInputSet}>
      <label htmlFor="article">Article</label>
      <select onChange={handleChange} id="article">
        {articlesList?.map((article) => (
          <option key={article} value={article}>
            {article}
          </option>
        ))}
        </select>
      </div>
      <div className={s.caseInputSet}>
      <label htmlFor="word">Word</label>
      <input placeholder={word} aria-label={word} type="text" name={word} />
      </div>
    </div>
  );
};

export default InputField;
