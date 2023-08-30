import { ReactElement, useState } from 'react';

// 공부중...
interface StepProps {
  children: ReactElement;
  name: string;
}
type StepComponent = (props: StepProps) => ReactElement;

interface FunnelProps {
  children: ReactElement[];
}
type FunnelComponent = (props: FunnelProps) => ReactElement | null;

type UseFunnelReturn = [
  FunnelComponent & { Step: StepComponent },
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

const useFunnel = (initialStep: string): UseFunnelReturn => {
  const [step, setStep] = useState(initialStep);

  const Step: StepComponent = ({ children }) => {
    return children;
  };

  const Funnel: FunnelComponent = ({ children }) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );
    return targetStep ?? null;
  };

  Object.assign(Funnel, { Step });
  return [Funnel as FunnelComponent & { Step: StepComponent }, step, setStep];
};

export default useFunnel;
