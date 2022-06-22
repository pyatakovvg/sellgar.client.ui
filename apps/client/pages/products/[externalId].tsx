
import Module, { getProduct } from '@module/product';
import Layout from '@layout/default';

import React from 'react';
import Head from 'next/head';
import { NextApiRequest } from 'next';


interface IProps {
  data: Array<any>;
}


export default function ProductByExternalId(props: IProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Товар</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(req: NextApiRequest) {
  const { externalId }: any = req['query'];
  const result = await getProduct(externalId);

  return {
    props: {
      data: result['data'],
    },
  };
}
