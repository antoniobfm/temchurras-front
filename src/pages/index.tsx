import ChurrasList from '@/modules/dashboard/ChurrasList';
import { Container } from '@/modules/dashboard/styles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/modules/dashboard/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TemChurras</title>
      </Head>
      <Container>
        <Header />
        <ChurrasList />
      </Container>
    </>
  );
};

export default Home;
