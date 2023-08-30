import { ReactNode } from 'react';

interface DefaultTemplateProps {
  children: ReactNode;
  currentPageIndex: number;
  onPrev: () => void;
}

const DefaultTemplate = ({
  children,
  currentPageIndex,
  onPrev,
}: DefaultTemplateProps) => {
  return (
    <div className="mx-auto flex h-screen w-[500px] flex-col bg-secondary px-5 py-3 mobile:w-screen">
      {currentPageIndex !== 0 && (
        <button
          onClick={onPrev}
          className="absolute"
        >
          <span className="material-symbols-outlined mr-2 text-2xl font-extrabold text-primary">
            arrow_back
          </span>
        </button>
      )}
      <main className="mt-12 flex flex-col items-center justify-center p-1">
        {children}
      </main>
    </div>
  );
};

export default DefaultTemplate;
