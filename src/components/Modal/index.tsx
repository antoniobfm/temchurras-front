import React, { createRef, useCallback, useEffect } from 'react';

import { ModalContainer } from './styles';

interface IModalProps {
  setState: any;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ children, setState }: IModalProps) => {
  // : Modal Management
  const node = createRef<HTMLDivElement>();

  const handleClickOutside = useCallback(
    async (e: any) => {
      if (node.current && node.current.contains(e.target)) {
        return;
      }
      setState(false);
    },
    [node, setState],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ModalContainer
      initial={{ opacity: 0, background: 'transparent' }}
      transition={{ ease: 'easeOut', duration: 0.1 }}
      animate={{ opacity: 1, background: 'rgba(10, 10, 11, 0.8)' }}
      exit={{ opacity: 0 }}
    >
      <div id="settings" ref={node}>
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
