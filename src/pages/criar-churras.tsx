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

const CriarChurras: React.FC = () => {
  const router = useRouter();

  const isMounted = useRef(0);

  const organizing = useSelector((state: RootState) => state.user.organizing);

  useEffect(() => {
    if (isMounted.current > 1 && organizing.length > 0) {
      const mostRecentChurras = organizing[organizing.length - 1];
      router.push(`c/${mostRecentChurras.id}`);
    } else {
      isMounted.current += 1;
    }
  }, [organizing]);

  return (
    <>
      <Head>
        <title>Criar Churras | TemChurras</title>
      </Head>
      <Container>
        <img src="/assets/background.png" alt="background" />
        <div className="actions">
          <div className="go-back" onClick={() => router.push('/')}>
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
          </div>
        </div>
        <div className="dashboard">
          <CreateChurrasForm />
        </div>
      </Container>
    </>
  );
};

export default CriarChurras;
