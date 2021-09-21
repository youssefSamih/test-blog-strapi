import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'theme/global-style';
import theme from 'theme/config';
import { getStrapiMedia } from 'lib/media';
import { fetchAPI } from 'lib/api';

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalStyle />
      <GlobalContext.Provider value={global}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
