import * as s from './styles.module.scss';

export interface SubmitButtonProps {
  text: string;
  className?: string;
  isdisabled: boolean;
  onSubmit: () => void;
}

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = ({
  text,
  className = '',
  onSubmit,
  isdisabled = false
}) => {
  return (
    <>
      <button
        className={`${s.btnSubmit} ${className}`}
        onClick={onSubmit}
        disabled={isdisabled}
      >
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
