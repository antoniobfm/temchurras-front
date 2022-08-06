/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import ChurrasList from '@/modules/dashboard/ChurrasList';
import Organizing from '@/modules/dashboard/Organizing';
import { Container } from '@/modules/dashboard/styles';
import { RootState } from '@/redux/store';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
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
        <title>TemChurras</title>
      </Head>
      <Container>
        <div className="header">
          <div className="header-title">
            <h1 style={{ fontWeight: 400 }}>Olá, {user.name}</h1>
            <button type="button" onClick={() => router.push('/perfil')}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0133 7.79999L18.0933 3.22666C16.8 2.47999 15.2 2.47999 13.8933 3.22666L5.98667 7.79999C4.69334 8.54666 3.89334 9.93332 3.89334 11.44V20.56C3.89334 22.0533 4.69334 23.44 5.98667 24.2L13.9067 28.7733C15.2 29.52 16.8 29.52 18.1067 28.7733L26.0267 24.2C27.32 23.4533 28.12 22.0667 28.12 20.56V11.44C28.1067 9.93332 27.3067 8.55999 26.0133 7.79999ZM16 9.78666C17.72 9.78666 19.1067 11.1733 19.1067 12.8933C19.1067 14.6133 17.72 16 16 16C14.28 16 12.8933 14.6133 12.8933 12.8933C12.8933 11.1867 14.28 9.78666 16 9.78666ZM19.5733 22.2133H12.4267C11.3467 22.2133 10.72 21.0133 11.32 20.12C12.2267 18.7733 13.9867 17.8667 16 17.8667C18.0133 17.8667 19.7733 18.7733 20.68 20.12C21.28 21 20.64 22.2133 19.5733 22.2133Z"
                  fill="#292D32"
                />
              </svg>
            </button>
          </div>

          <Organizing />
        </div>
        <ChurrasList />
      </Container>
    </>
  );
};

export default Home;
