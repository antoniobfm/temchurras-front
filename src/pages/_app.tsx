/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Head from 'next/head';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from '@/hooks/toast';
import AppProvider from '@/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyle />
        <AppProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </AppProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
