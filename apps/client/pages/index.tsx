
import Layout from '@layout/default';
import Module, { getGroups, getProducts } from '@module/main';

import React from 'react';
import Head from 'next/head';
import getConfig from "next/config";
import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IPropsResult {
  groups: any;
  data: any;
  meta: any;
}

interface IContext extends GetServerSidePropsContext {
  query: any;
}


export default function Main<NextPage>(props: IPropsResult) {
  return (
    <Layout>
      <Head>
        <title>{ process.env['TITLE'] }</title>
        <meta name="description" content="интернет магазин" />

        <meta property={'og:title'} content={process.env['TITLE']} />
        <meta property={'og:type'} content={'website'} />
        <meta property={'og:image'} content={process.env['GATEWAY_SERVICE_API'] + '/favicon.svg'} />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="124" />
        <meta property="og:image:height" content="124" />
        <meta property={'og:url'} content={process.env['WEBSITE_URL']} />

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
    },
  };
}
