
import Layout from '@layout/default';
import Module, { getDelivery, getPayment } from '@module/checkout';

import React from 'react';
import Head from 'next/head';


interface IProps {
  payment: Array<any>;
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
  const payment = await getPayment();
  const delivery = await getDelivery();

  return {
    props: {
      payment: payment['data'],
      delivery: delivery['data'],
    },
  };
}
