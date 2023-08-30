import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="mt-2 w-48 rounded-lg bg-primary py-1 text-white disabled:bg-grey"
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

export default Button;
