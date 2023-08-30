import { ChangeEvent } from 'react';
import { Button, Form, InfoText, Input } from '../components/base';
import type { PageProps } from '../types';

const InputNamePage = ({
  onNext,
  cardValue,
  changeCardCreationData,
}: PageProps) => {
  return (
    <div>
      <InfoText>이름을 입력해주세요.</InfoText>
      <Form onSubmit={onNext}>
        <Input
          value={cardValue.name || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeCardCreationData(e.target.value)
          }
        />
        <Button disabled={cardValue.name?.trim() ? false : true}>Next</Button>
      </Form>
    </div>
  );
};

export default InputNamePage;
