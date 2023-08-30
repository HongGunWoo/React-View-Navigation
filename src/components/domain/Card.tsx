import type { CardCreationData } from '../../types';
import Logo from '../../assets/programmers-logo-light.png';
import { forwardRef } from 'react';

const cardConfig: Record<string, string> = {
  'Front End': 'bg-front',
  'Back End': 'bg-back',
};

const Card = forwardRef(
  ({ cardCreationData }: { cardCreationData: CardCreationData }, ref) => {
    return (
      <div
        ref={ref as React.MutableRefObject<null>}
        className="relative my-7 h-72 w-48 self-center rounded-xl bg-grey px-4 py-3 shadow-lg"
      >
        <div
          className={`absolute left-0 right-0 top-0 mb-7 h-48 rounded-xl rounded-b-none px-4 py-3 transition-all duration-700 ${
            cardCreationData.position && cardConfig[cardCreationData.position]
          }`}
        >
          <div className="mb-1 aspect-auto w-28 translate-x-[-5px]">
            <img src={Logo} />
          </div>
          <div className="w-30 overflow-hidden break-words text-[2.5rem] font-extrabold leading-10 text-white">
            {cardCreationData.position ?? '프롱이? 백둥이?'}
          </div>

          <div className="mt-6 text-xs font-bold text-white">
            K-Digital Training
          </div>
          <div className="text-xs font-bold text-white">
            프로그래머스 데브코스 4기
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 flex h-24 flex-col items-center justify-center gap-1 rounded-xl rounded-t-none bg-white">
          <div className="font-normal text-grey">
            {'<' + (cardCreationData.role ?? '역할') + ' />'}
          </div>
          <div
            className={`w-full overflow-hidden text-ellipsis whitespace-nowrap break-all px-3 text-center text-4xl font-extrabold ${
              cardCreationData.name ? 'text-black' : 'text-grey'
            }`}
          >
            {cardCreationData.name ?? '이름'}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
