import {
  InputNamePage,
  SelectPositionPage,
  SelectRolePage,
  CardCompletePage,
} from '../pages';
import useLocalStorage from '../hooks/useLocalStorage';
import { CardCreationTemplate } from '../components/templates';
import { CardCreationData } from '../types';
import { Card } from '../components/domain';
import PageTransition from '../components/transition/PageTransition';
import { CSSTransition } from 'react-transition-group';
import { SCALE_UP_TIME } from '../constants/transitionTime';
import { useCallback, useRef } from 'react';

const CARD_CREATION_PAGE_LIST = ['position', 'name', 'role', 'complete'];

const CARD_CREATION_INITIAL_DATA: CardCreationData = {
  currentPage: CARD_CREATION_PAGE_LIST[0],
};

const CardCreationPage = () => {
  const cardRef = useRef(null);
  const pageRef = useRef(null);

  const [cardCreationData, setCardCreationData] = useLocalStorage(
    'cardCreationData',
    CARD_CREATION_INITIAL_DATA
  );

  const currentPageIndex = CARD_CREATION_PAGE_LIST.findIndex(
    (page) => page === cardCreationData.currentPage
  );

  const onPrevPage = () => {
    if (currentPageIndex === 0) return;
    try {
      setCardCreationData({
        ...cardCreationData,
        currentPage: CARD_CREATION_PAGE_LIST[currentPageIndex - 1],
      });
    } catch (error) {
      alert('페이지 이동 중 오류가 발생했습니다...');
    }
  };

  const onNextPage = () => {
    if (currentPageIndex === CARD_CREATION_PAGE_LIST.length - 1) return;
    try {
      setCardCreationData({
        ...cardCreationData,
        currentPage: CARD_CREATION_PAGE_LIST[currentPageIndex + 1],
      });
    } catch (error) {
      alert('페이지 이동 중 오류가 발생했습니다...');
    }
  };

  const resetCardCreationData = useCallback(() => {
    try {
      setCardCreationData(CARD_CREATION_INITIAL_DATA);
    } catch (error) {
      alert('사용자 데이터 초기화 중 오류가 발생했습니다...');
    }
  }, [setCardCreationData]);

  const changeCardCreationData = (value: string) => {
    try {
      setCardCreationData({
        ...cardCreationData,
        [cardCreationData.currentPage]: value,
      });
    } catch (error) {
      alert('사용자 데이터 저장 중 오류가 발생했습니다...');
    }
  };

  return (
    <CardCreationTemplate
      currentPageIndex={currentPageIndex}
      onPrev={onPrevPage}
    >
      <CSSTransition
        nodeRef={cardRef}
        in={cardCreationData.currentPage === 'complete'}
        classNames="scaleUp"
        timeout={SCALE_UP_TIME}
      >
        <Card
          cardCreationData={cardCreationData}
          ref={cardRef}
        />
      </CSSTransition>
      <PageTransition
        transitionKey={cardCreationData.currentPage}
        nodeRef={pageRef}
      >
        <div ref={pageRef}>
          {cardCreationData.currentPage === 'position' && (
            <SelectPositionPage
              onNext={onNextPage}
              cardValue={cardCreationData}
              changeCardCreationData={changeCardCreationData}
            />
          )}
          {cardCreationData.currentPage === 'name' && (
            <InputNamePage
              onNext={onNextPage}
              cardValue={cardCreationData}
              changeCardCreationData={changeCardCreationData}
            />
          )}
          {cardCreationData.currentPage === 'role' && (
            <SelectRolePage
              onNext={onNextPage}
              cardValue={cardCreationData}
              changeCardCreationData={changeCardCreationData}
            />
          )}

          {cardCreationData.currentPage === 'complete' && (
            <CardCompletePage resetCardCreationData={resetCardCreationData} />
          )}
        </div>
      </PageTransition>
    </CardCreationTemplate>
  );
};

export default CardCreationPage;
