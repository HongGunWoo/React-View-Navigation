import { ChangeEvent } from 'react';

interface InputProps {
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="h-10 w-full rounded-md border-2 border-grey text-center focus:border-primary focus:outline-none"
    />
  );
};

export default Input;
