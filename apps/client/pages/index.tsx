
import Layout from '@layout/default';
import {getBucket} from '@widget/bucket';
import Module, { getGroupsRequest, getProductsRequest } from '@module/main';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  groups: Array<any>;
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
        <title>Sellgar - интернет магазин</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  const groups = await getGroupsRequest();
  const result = await getProductsRequest({
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((query?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
  });

  return {
    props: {
      groups: groups['data'],
      data: result['data'],
      meta: result['meta'],
      env: {
        TAKE_PRODUCTS: Number(process.env['TAKE_PRODUCTS']),
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
