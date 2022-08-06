/* eslint-disable consistent-return */

import React, { useCallback, useEffect, useState } from 'react';

import { ToastMessage, useToast } from '../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    filter: 'blur(0px)',
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const [direction, setDirection] = useState(0);
  const { removeToast } = useToast();

  useEffect(() => {
    if (!message.infinite) {
      const timer = setTimeout(() => {
        removeToast(message.id);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [removeToast, message.id, message.infinite]);

  const exitToast = useCallback(
    (newDirection: number) => {
      removeToast(message.id);
      setDirection(newDirection);
    },
    [removeToast, message.id],
  );

  return (
    <Container
      key={message.id}
      type={message.type}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      onClick={() => removeToast(message.id)}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          exitToast(1);
        } else if (swipe > swipeConfidenceThreshold) {
          exitToast(-1);
        }
      }}
    >
      <div>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 1.58334C5.13792 1.58334 1.58333 5.13793 1.58333 9.50001C1.58333 13.8621 5.13792 17.4167 9.5 17.4167C13.8621 17.4167 17.4167 13.8621 17.4167 9.50001C17.4167 5.13793 13.8621 1.58334 9.5 1.58334ZM13.2842 7.67918L8.79542 12.1679C8.68458 12.2788 8.53417 12.3421 8.37583 12.3421C8.2175 12.3421 8.06708 12.2788 7.95625 12.1679L5.71583 9.92751C5.48625 9.69793 5.48625 9.31793 5.71583 9.08834C5.94542 8.85876 6.32542 8.85876 6.555 9.08834L8.37583 10.9092L12.445 6.84001C12.6746 6.61043 13.0546 6.61043 13.2842 6.84001C13.5138 7.06959 13.5138 7.44168 13.2842 7.67918Z"
            fill="#272105"
          />
        </svg>

        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
    </Container>
  );
};

export default Toast;
