import { ReactNode } from 'react';

interface InfoTextProps {
  children: ReactNode;
}

const InfoText = ({ children }: InfoTextProps) => {
  return <div className="mb-3 text-center">{children}</div>;
};

export default InfoText;
