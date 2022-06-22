
import Module, { getProducts } from '@module/main';
import Layout from '@layout/default';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: Array<any>;
}


export default function Main(props: IProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>MyQand: Landing</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const result = await getProducts();

  return {
    props: {
      data: result['data'],
    },
  };
}
