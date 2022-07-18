
import Layout from '@layout/default';
import {getBucket} from '@widget/bucket';
import Module, { getProductsRequest } from '@module/products';

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
        <title>Категория товара</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const params = props['params'];
  const result = await getProductsRequest({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
  });

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
