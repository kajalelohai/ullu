import * as s from './styles.module.scss';

export enum ButtonType {
  primary = 'primary',
  link = 'link',
  cancel = 'Cancel',
}

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void);
  children: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className = '',
  onClick,
  children,
  type = ButtonType.primary,
  disabled = false
}) => {
  let btnClass = s.btn;
  switch (type) {
    case ButtonType.link:
      btnClass = s.linkBtn;
      break;
  }

  return (
    <>
      <button
        className={`${className} ${btnClass}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
