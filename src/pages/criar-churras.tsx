import { Container } from '@/modules/criarChurras/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CreateChurrasForm from '@/modules/criarChurras/Form';
import { motion } from 'framer-motion';
import Header from '@/modules/criarChurras/Header';

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
        <Header />
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
