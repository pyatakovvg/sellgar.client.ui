
import Layout from '@layout/default';
import Module, { getGroups, getProducts } from '@module/main';

import React from 'react';
import Head from 'next/head';
import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next';


interface IPropsResult {
  groups: any;
  data: any;
  meta: any;
  env: any;
}

interface IContext extends GetServerSidePropsContext {
  query: any;
}


export default function Main<NextPage>(props: IPropsResult) {
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

export async function getServerSideProps(context: IContext): Promise<GetServerSidePropsResult<IPropsResult>> {
  const groups = await getGroups();
  const result = await getProducts({
    // sort: Number(query?.['sort'] || 1),
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((context['query']?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
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
