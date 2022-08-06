import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Wrapper } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
}: ToastContainerProps) => {
  return (
    <Wrapper>
      <AnimatePresence>
        {messages.map(item => (
          <Toast key={item.id} message={item} />
        ))}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ToastContainer;
