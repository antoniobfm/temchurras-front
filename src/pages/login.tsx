/* eslint-disable react-hooks/rules-of-hooks */
import Authentication from '@/modules/login/Authentication';
import { Container } from '@/modules/login/styles';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Login | TemChurras</title>
      </Head>
      <Container>
        <img src="/assets/background.png" alt="background" />
        <AnimatePresence exitBeforeEnter>
          <Authentication />
        </AnimatePresence>
      </Container>
    </>
  );
};

export default login;
