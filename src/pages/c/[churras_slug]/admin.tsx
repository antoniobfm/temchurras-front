/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

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
          <img src="/assets/background.png" alt="background" />
          <div className="actions">
            <div className="go-back" onClick={() => router.back()}>
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
            <Summary />
            <PresenceList />
            <ShareChurras />
          </div>
        </Container>
      </>
    );

  return <Loading />;
};

export default ChurrasAdmin;
