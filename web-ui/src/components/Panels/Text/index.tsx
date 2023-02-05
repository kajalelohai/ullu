import * as s from './styles.module.scss';

export interface TextPanelProps {
  text?: string;
  subtext?: string;
  className?: string;
  children?: React.ReactNode;
}

const TextPanel: React.FunctionComponent<TextPanelProps> = ({
  text,
  subtext,
  children,
  className = ''
}) => {
  return (
    <div className={`${s.panel} ${className}`}>
      {text ? <h2>{text}</h2> : null}
      {subtext ? <div className={s.subtext}>{subtext}</div> : null}

      {children ? <div className={s.surplus}>{children}</div> : null}
    </div>
  );
};

export default TextPanel;
