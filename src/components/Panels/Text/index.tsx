import * as s from './styles.module.scss';

export default ({ text, subtext }) => (
  <div className={s.panel}>
    <h2>{text}</h2>
    <div className={s.panelSubtext}>{subtext}</div>
  </div>
);
