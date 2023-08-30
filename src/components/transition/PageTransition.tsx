import { ReactNode } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { PAGE_TIME } from '../../constants/transitionTime';

interface PageTransitionProps {
  transitionKey: string;
  children: ReactNode;
  nodeRef: React.MutableRefObject<null>;
}

const PageTransition = ({
  transitionKey,
  nodeRef,
  children,
}: PageTransitionProps) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={transitionKey}
        nodeRef={nodeRef}
        classNames="page"
        timeout={PAGE_TIME}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;
