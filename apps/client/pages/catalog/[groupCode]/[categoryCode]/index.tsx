
import Layout from '@layout/default';
import {getBucket} from '@widget/bucket';
import Module, { getBrandsRequest, getProductsRequest } from '@module/products';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  brands: Array<any>;
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
  const query = props['query'];
  const params = props['params'];

  const brands = await getBrandsRequest({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
  });
  const result = await getProductsRequest({
    brandCode: query?.['brand'] || undefined,
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((query?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
  });

  return {
    props: {
      brands: brands['data'],
      data: result['data'],
      meta: result['meta'],
      env: {
        TAKE_PRODUCTS: Number(process.env['TAKE_PRODUCTS']),
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
