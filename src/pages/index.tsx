import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Main } from 'Containers';
import { fetchAPI } from 'lib/api';
import type { MainProps } from 'types/articles';

const Home: NextPage<MainProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Recruitment</title>
        <meta name="description" content="Recruitment post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main {...{ articles }} />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([fetchAPI('/articles')]);

  return {
    props: { articles },
    revalidate: 1,
  };
}

export default Home;
