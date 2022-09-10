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
import Header from '@/modules/churras/Header';

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
        <Header />
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
