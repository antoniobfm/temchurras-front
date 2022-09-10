import React, { useEffect } from 'react';
import { Container } from '@/modules/churras/pages/admin/styles';
import { useRouter } from 'next/router';
import PresenceList from '@/modules/churras/pages/admin/PresenceList';
import Summary from '@/modules/churras/pages/admin/Summary';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ShareChurras from '@/modules/churras/pages/admin/ShareChurras';
import Loading from '@/components/Loading';
import { motion } from 'framer-motion';
import Header from '@/modules/churras/pages/admin/Header';

const ChurrasAdmin: React.FC = () => {
  const router = useRouter();

  const churras_slug = router.query.churras_slug as string;

  const is_organizing = useSelector(
    (state: RootState) =>
      state.user.organizing.filter(churras => churras.id === churras_slug)
        .length > 0,
  );

  useEffect(() => {
    if (churras_slug) if (!is_organizing) router.push(`/c/${churras_slug}`);
  }, [is_organizing, churras_slug, router]);

  if (churras_slug)
    return (
      <>
        <Head>
          <title>{churras_slug} | Painel de Administração | TemChurras</title>
        </Head>
        <Container>
          <Header />
          <motion.div
            className="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Summary />
            <PresenceList />
            <ShareChurras />
          </motion.div>
        </Container>
      </>
    );

  return <Loading />;
};

export default ChurrasAdmin;
