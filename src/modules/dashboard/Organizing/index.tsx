/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import MiniChurrasCard from './MiniChurrasCard';
import { Container } from './styles';

const Organizing: React.FC = () => {
  const router = useRouter();

  const organizing = useSelector((state: RootState) =>
    state.user.organizing.map(org => {
      const organizingChurras = state.user.churras.filter(
        churras => churras.id === org.id,
      );

      return {
        ...organizingChurras[0],
        ...org,
      };
    }),
  );

  const lilMotion = {
    rest: {
      scale: 1,
      duration: 0.2,
    },
    tapping: {
      scale: 0.95,
      duration: 0.2,
    },
  };

  const lilMotion2 = {
    rest: {
      filter: 'blur(1px)',
      scale: 1,
      duration: 0.2,
    },
    tapping: {
      filter: 'blur(0px)',
      scale: 0.95,
      duration: 0.2,
    },
  };

  return (
    <Container
      className="organizing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h4>ORGANIZANDO</h4>
      <div className="organizing-list">
        {organizing.map(churras => (
          <MiniChurrasCard
            key={churras.id}
            id={churras.id}
            name={churras.name}
            date={churras.date}
          />
        ))}
        <motion.div
          className="organizing-list-add"
          onClick={() => router.push('/criar-churras')}
          whileTap="tapping"
          whileHover="tapping"
          variants={lilMotion}
          initial="rest"
          animate="rest"
        >
          <div className="organizing-list-add-content">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                fill="white"
              />
            </svg>
            <h4>CRIAR NOVO</h4>
          </div>
          <motion.img
            src="/assets/background.png"
            alt="background"
            variants={lilMotion2}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Organizing;
