/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Contribute from '@/modules/churras/Contribute';
import { Container } from '@/modules/churras/styles';
import Summary from '@/modules/churras/Summary';
import { showChurras } from '@/redux/churras.actions';
import { AppDispatch, RootState } from '@/redux/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useRouteBefore } from '@/hooks/routeBefore';

const Churras: React.FC = () => {
  const router = useRouter();
  const { routeBefore } = useRouteBefore();

  const dispatch = useDispatch<AppDispatch>();

  const churras_slug = router.query.churras_slug as string;

  const data = useSelector(
    (state: RootState) =>
      state.user.churras.filter(churras => churras.id === churras_slug)[0],
  );

  useEffect(() => {
    if (churras_slug) dispatch(showChurras(churras_slug));
  }, [churras_slug, dispatch]);

  const { id, name } = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    if (churras_slug)
      if (!id || (id && !name)) {
        router.push(`/login?redirect=${churras_slug}`);
      }
  }, [id, name, churras_slug, router]);

  return (
    <>
      <Head>
        <title>{data && data.name} | TemChurras</title>
      </Head>
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
        <motion.div
          className="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: routeBefore === '/c/[churras_slug]/admin' ? 0 : 0.5,
          }}
        >
          <Summary />
          <Contribute />
        </motion.div>
      </Container>
    </>
  );
};

export default Churras;
