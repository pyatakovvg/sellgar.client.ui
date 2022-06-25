
import Layout from '@layout/no-cart';
import Module, { getCheckout, getDelivery, getPayments } from '@module/checkout';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: any;
  delivery: Array<any>;
  payments: Array<any>;
}


export default function Main(props: IProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Оформление заказа</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const checkout = await getCheckout();
  const delivery = await getDelivery();
  const payments = await getPayments();

  return {
    props: {
      data: checkout['data'],
      delivery: delivery['data'],
      payments: payments['data'],
    },
  };
}
