import { ReactNode } from 'react';
import './style.scss';

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  children: string | ReactNode;
  icon?: ReactNode;
  transparent?: boolean;
}

export const Button = ({
  onClick,
  children,
  disabled,
  icon,
  transparent,
}: ButtonProps) => {
  return (
    <button
      className={`button ${transparent ? 'button__transparent' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
