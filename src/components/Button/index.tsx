import * as s from './styles.module.scss';

export interface ButtonProps {
  className?: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className = '',
  onClick,
  children,
  disabled = false
}) => {
  return (
    <>
      <button
        className={`${s.btn} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
