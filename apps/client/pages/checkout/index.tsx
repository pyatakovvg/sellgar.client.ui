
import Layout from '@layout/default';
import Module, { getDelivery, getPayment } from '@module/bucket';

import React from 'react';
import Head from 'next/head';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
}


export default function Checkout(props: IProps) {
  return (
    <Layout withoutBucket={true}>
      <Head>
        <title>Оформление заказа { process.env['TITLE'] }</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const payments = await getPayment();
  const delivery = await getDelivery();

  return {
    props: {
      payments: payments['data'],
      delivery: delivery['data'],
    },
  };
}
