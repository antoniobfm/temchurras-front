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
        {message.type === 'success' && (
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
        )}
        {message.type === 'error' && (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50004 1.58333C5.13796 1.58333 1.58337 5.13791 1.58337 9.49999C1.58337 13.8621 5.13796 17.4167 9.50004 17.4167C13.8621 17.4167 17.4167 13.8621 17.4167 9.49999C17.4167 5.13791 13.8621 1.58333 9.50004 1.58333ZM12.16 11.3208C12.3896 11.5504 12.3896 11.9304 12.16 12.16C12.0413 12.2787 11.8909 12.3342 11.7405 12.3342C11.59 12.3342 11.4396 12.2787 11.3209 12.16L9.50004 10.3392L7.67921 12.16C7.56046 12.2787 7.41004 12.3342 7.25962 12.3342C7.10921 12.3342 6.95879 12.2787 6.84004 12.16C6.61046 11.9304 6.61046 11.5504 6.84004 11.3208L8.66087 9.49999L6.84004 7.67916C6.61046 7.44958 6.61046 7.06958 6.84004 6.83999C7.06962 6.61041 7.44962 6.61041 7.67921 6.83999L9.50004 8.66083L11.3209 6.83999C11.5505 6.61041 11.9305 6.61041 12.16 6.83999C12.3896 7.06958 12.3896 7.44958 12.16 7.67916L10.3392 9.49999L12.16 11.3208Z"
              fill="#272105"
            />
          </svg>
        )}

        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
    </Container>
  );
};

export default Toast;
