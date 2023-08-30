import { CardCreationData } from '.';

export default interface PageProps {
  onNext: () => void;
  cardValue: CardCreationData;
  changeCardCreationData: (value: string) => void;
}
