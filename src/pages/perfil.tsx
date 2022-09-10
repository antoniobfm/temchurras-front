import { Container } from '@/modules/profile/styles';
import { RootState } from '@/redux/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import EditProfile from '@/modules/profile/EditProfile';
import Header from '@/modules/profile/Header';

const Profile: React.FC = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    if (!user.name) {
      router.push('/login');
    }
  }, [user.name, router]);

  return (
    <>
      <Head>
        <title>Meu Perfil | TemChurras</title>
      </Head>
      <Container>
        <Header />
        <motion.div
          className="dashboard"
          layoutId="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <EditProfile />
        </motion.div>
      </Container>
    </>
  );
};

export default Profile;
