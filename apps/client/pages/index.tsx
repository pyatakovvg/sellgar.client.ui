
import Layout from '@layout/default';
import {getBucket} from '@widget/bucket';
import Module, { getProductsRequest } from '@module/main';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Main(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucket());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Sellgar - Витрина</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const result = await getProductsRequest();

  return {
    props: {
      data: result['data'],
      meta: result['meta'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
