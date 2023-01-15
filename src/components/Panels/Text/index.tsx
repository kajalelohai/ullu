import * as s from './styles.module.scss';

export interface TextPanelProps {
  text: string;
  subtext: string;
  className?: string;
}

const TextPanel: React.FunctionComponent<TextPanelProps> = ({
  text,
  subtext,
  className = ''
}) => {
  return (
    <div className={`${s.panel} ${className}`}>
      <h2>{text}</h2>
      <div className={s.panelSubtext}>{subtext}</div>
    </div>
  );
};

export default TextPanel;
