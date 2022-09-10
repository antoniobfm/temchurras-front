import React from 'react';
import { motion } from 'framer-motion';

import { useRouteBefore } from '@/hooks/routeBefore';
import { useRouter } from 'next/router';
import { Container } from './styles';

const Header: React.FC = () => {
  const router = useRouter();
  const { routeBefore } = useRouteBefore();

  return (
    <Container>
      <motion.div
        className="header"
        layoutId="header"
        transition={{ layout: { ease: 'easeInOut', duration: 0.5 } }}
      >
        <motion.div
          layoutId="background"
          initial={{
            opacity:
              routeBefore === '/c/[churras_slug]/admin' ||
              routeBefore === '/criar-churras'
                ? 1
                : 0,
          }}
          animate={{ opacity: 1 }}
        />
      </motion.div>

      <div className="actions">
        <motion.div
          className="go-back"
          onClick={() => router.push('/')}
          initial={{
            opacity: routeBefore === '/c/[churras_slug]/admin' ? 1 : 0,
          }}
          animate={{ opacity: 1 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.65 4.43331L8.975 7.10831L7.33333 8.74164C6.64167 9.43331 6.64167 10.5583 7.33333 11.25L11.65 15.5666C12.2167 16.1333 13.1833 15.725 13.1833 14.9333V10.2583V5.06664C13.1833 4.26664 12.2167 3.86664 11.65 4.43331Z"
              fill="#292D32"
            />
          </svg>

          <span>VOLTAR</span>
        </motion.div>
      </div>
    </Container>
  );
};

export default Header;
