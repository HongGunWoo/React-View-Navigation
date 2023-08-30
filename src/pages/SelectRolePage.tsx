import { ChangeEvent } from 'react';
import type { PageProps } from '../types';
import { Button, Form, InfoText, Label } from '../components/base';

const SelectRolePage = ({
  onNext,
  cardValue,
  changeCardCreationData,
}: PageProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeCardCreationData(event.target.value);
  };

  return (
    <div>
      <InfoText>맡은 역할을 선택해주세요.</InfoText>
      <Form onSubmit={onNext}>
        <ul className="md:grid-cols-2 grid w-full gap-2">
          <li>
            <input
              className="peer hidden"
              type="radio"
              value="Mentee"
              id="Mentee"
              checked={cardValue.role === 'Mentee'}
              onChange={handleOptionChange}
              name="role"
              required
            />
            <Label
              htmlFor="Mentee"
              color="primary"
            >
              멘티
            </Label>
          </li>
          <li>
            <input
              className="peer hidden"
              type="radio"
              value="Mento"
              id="Mento"
              checked={cardValue.role === 'Mento'}
              onChange={handleOptionChange}
              name="role"
            />
            <Label
              htmlFor="Mento"
              color="primary"
            >
              멘토
            </Label>
          </li>
        </ul>
        <Button disabled={cardValue.role ? false : true}>next</Button>
      </Form>
    </div>
  );
};

export default SelectRolePage;
