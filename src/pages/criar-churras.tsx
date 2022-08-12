/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Container } from '@/modules/criarChurras/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CreateChurrasForm from '@/modules/criarChurras/Form';
import { motion } from 'framer-motion';

const CriarChurras: React.FC = () => {
  const router = useRouter();

  const isMounted = useRef(false);

  const organizing = useSelector((state: RootState) => state.user.organizing);

  useEffect(() => {
    if (isMounted.current && organizing.length > 0) {
      const mostRecentChurras = organizing[organizing.length - 1];
      router.push(`/c/${mostRecentChurras.id}`);
    } else {
      isMounted.current = true;
    }
  }, [organizing.length]);

  return (
    <>
      <Head>
        <title>Criar Churras | TemChurras</title>
      </Head>
      <Container>
        <motion.div
          className="header"
          layoutId="header"
          transition={{ layout: { ease: 'easeInOut', duration: 0.5 } }}
        >
          <motion.div
            layoutId="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
        <div className="actions">
          <motion.div
            className="go-back"
            onClick={() => router.back()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
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
        <motion.div
          className="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          layoutId="dashboard"
        >
          <CreateChurrasForm />
        </motion.div>
      </Container>
    </>
  );
};

export default CriarChurras;
