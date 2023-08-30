import { Button } from '../components/base';

interface CardCompletePageProps {
  resetCardCreationData: () => void;
}

const CardCompletePage = ({ resetCardCreationData }: CardCompletePageProps) => {
  return (
    <div className="mt-56">
      <Button onClick={resetCardCreationData}>다시 만들기</Button>
    </div>
  );
};

export default CardCompletePage;
