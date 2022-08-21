
import Layout from '@layout/default';
import { getBucketRequest, getBucketSuccessRequestAction } from '@widget/bucket';
import Module, { getGroupsRequest, getProductsRequest } from '@module/main';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  bucket: any;
  groups: Array<any>;
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Main<NextPage>(props: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucketSuccessRequestAction(props['bucket']));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{ process.env['TITLE'] }</title>
        <meta name="description" content="Sellgar - интернет магазин сантехники, плитки, ламината в Крыму. Доставка или самовывоз 24/7. Огромный выбор по лучшей цене. +7 999 999 99 99" />
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps({ query, ...props }: any) {
  const bucket = await getBucketRequest(props['req']['headers']);
  const groups = await getGroupsRequest();
  const result = await getProductsRequest({
    sort: Number(query?.['sort'] || 1),
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((query?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
  });

  return {
    props: {
      bucket: bucket['data'],
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
