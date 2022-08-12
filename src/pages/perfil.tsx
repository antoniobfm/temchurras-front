/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Container } from '@/modules/profile/styles';
import { AppDispatch, RootState } from '@/redux/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '@/redux/authentication.actions';
import { motion } from 'framer-motion';
import EditProfile from '@/modules/profile/EditProfile';

const Profile: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    if (!user.name) {
      router.push('/login');
    }
  }, [user.name, router]);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Meu Perfil | TemChurras</title>
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
          <motion.div
            className="go-back"
            onClick={handleSignOut}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <span>SAIR</span>
          </motion.div>
        </div>
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
