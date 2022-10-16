
import Layout from '@layout/default';
import Module, { getCheckout } from '@module/checkout';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: any;
}


export default function ProductByExternalId<NextPage>(props: IProps) {
  return (
    <Layout withoutBucket={true}>
      <Head>
        <title>Ваш заказ</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const { uuid }: any = props['query'];
  const result = await getCheckout(uuid);

  return {
    props: {
      data: result['data'],
    },
  };
}
