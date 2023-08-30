import { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  color: string;
  children: ReactNode;
}

const labelConfig: Record<string, string> = {
  primary:
    'hover:text-primary peer-checked:border-primary peer-checked:text-primary',
  front: 'hover:text-front peer-checked:border-front peer-checked:text-front',
  back: 'hover:text-back peer-checked:border-back peer-checked:text-back',
};

const Label = ({ htmlFor, color, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`hover:bg-lightGrey inline-flex w-48 cursor-pointer justify-center rounded-lg border bg-white px-5 py-2 font-semibold text-grey ${labelConfig[color]}`}
    >
      {children}
    </label>
  );
};

export default Label;
