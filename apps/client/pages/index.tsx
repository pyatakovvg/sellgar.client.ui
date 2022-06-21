
import Module from '@module/main';
import Layout from '@layout/default';

import React from 'react';
import Head from 'next/head';


export default function Main() {
  // React.useEffect(() => {
  //   window.env = env;
  // }, []);

  return (
    <Layout>
      <Head>
        <title>MyQand: Landing</title>
      </Head>
      <Module />
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {}
  };
}
