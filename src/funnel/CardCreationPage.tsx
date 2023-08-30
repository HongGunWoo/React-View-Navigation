// import {
//   InputNamePage,
//   SelectPositionPage,
//   SelectRolePage,
//   CardCompletePage,
// } from '../pages';
// import useFunnel from '../hooks/useFunnel';
// import useLocalStorage from '../hooks/useLocalStorage';
// import { CardCreationTemplate } from '../components/templates';
// import { useEffect, useState } from 'react';
// import { CardCreationData } from '../types';

// const PAGE_LIST = ['position', 'name', 'role', 'complete'];

// const cardCreationPageData: CardCreationData = {
//   currentPage: PAGE_LIST[0],
// };

// const CardCreationPage = () => {
//   const [cardValue, setCardValue] = useLocalStorage(
//     'CardCreationPageData',
//     cardCreationPageData
//   );
//   const [Funnel, step, setStep] = useFunnel(cardValue.currentPage);
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);

//   useEffect(() => {
//     setCurrentPageIndex(PAGE_LIST.findIndex((page) => page === step));
//     setCardValue({
//       ...cardValue,
//       currentPage: step,
//     });
//   }, [step]);

//   const onPrevPage = () => {
//     if (currentPageIndex === 0) return;
//     setStep(PAGE_LIST[currentPageIndex - 1]);
//   };

//   const onNextPage = () => {
//     if (currentPageIndex === PAGE_LIST.length - 1) return;
//     setStep(PAGE_LIST[currentPageIndex + 1]);
//   };

//   const changeCardValue = (value: string) => {
//     setCardValue({
//       ...cardValue,
//       [step]: value,
//     });
//   };

//   return (
//     <CardCreationTemplate
//       currentPageIndex={currentPageIndex}
//       step={step}
//       onPrev={onPrevPage}
//     >
//       <div className="h-64 w-36 self-center rounded-xl bg-grey">
//         {cardValue.name && <div>{cardValue.name}</div>}
//         {cardValue.position && <div>{cardValue.position}</div>}
//         {cardValue.role && <div>{cardValue.role}</div>}
//       </div>
//       <Funnel>
//         <Funnel.Step name="position">
//           <SelectPositionPage
//             onNext={onNextPage}
//             cardValue={cardValue}
//             changeCardValue={changeCardValue}
//           />
//         </Funnel.Step>
//         <Funnel.Step name="name">
//           <InputNamePage
//             onNext={onNextPage}
//             cardValue={cardValue}
//             changeCardValue={changeCardValue}
//           />
//         </Funnel.Step>
//         <Funnel.Step name="role">
//           <SelectRolePage
//             onNext={onNextPage}
//             cardValue={cardValue}
//             changeCardValue={changeCardValue}
//           />
//         </Funnel.Step>
//         <Funnel.Step name="complete">
//           <CardCompletePage />
//         </Funnel.Step>
//       </Funnel>
//     </CardCreationTemplate>
//   );
// };

// export default CardCreationPage;
