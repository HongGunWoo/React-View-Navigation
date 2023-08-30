import { ChangeEvent } from 'react';
import type { PageProps } from '../types';
import { Button, Form, InfoText, Label } from '../components/base';

const SelectPositionPage = ({
  onNext,
  cardValue,
  changeCardCreationData,
}: PageProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeCardCreationData(event.target.value);
  };

  return (
    <div>
      <InfoText>지원하신 포지션을 선택해주세요.</InfoText>
      <Form onSubmit={onNext}>
        <ul className="md:grid-cols-2 grid w-full justify-center gap-2">
          <li>
            <input
              className="peer hidden"
              type="radio"
              value="Front End"
              id="Frontend"
              checked={cardValue.position === 'Front End'} // 선택된 값과 비교하여 체크 상태 결정
              onChange={handleOptionChange}
              name="position"
              required
            />
            <Label
              htmlFor="Frontend"
              color="front"
            >
              Frontend
            </Label>
          </li>
          <li>
            <input
              className="peer hidden"
              type="radio"
              value="Back End"
              id="Backend"
              checked={cardValue.position === 'Back End'}
              onChange={handleOptionChange}
              name="position"
            />
            <Label
              htmlFor="Backend"
              color="back"
            >
              Backend
            </Label>
          </li>
        </ul>

        <Button disabled={cardValue.position ? false : true}>Next</Button>
      </Form>
    </div>
  );
};

export default SelectPositionPage;
