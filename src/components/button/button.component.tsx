import { ReactNode } from 'react';
import './style.scss';

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  children: string | ReactNode;
  icon?: ReactNode;
  transparent?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  children,
  disabled,
  icon,
  transparent,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className ? className : ''} ${
        transparent ? 'button__transparent' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
