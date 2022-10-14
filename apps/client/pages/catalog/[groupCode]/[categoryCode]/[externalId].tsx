
import Layout from '@layout/default';
import Module, { getProduct, getComments } from '@module/product';

import React from 'react';
import Head from 'next/head';
import getConfig from "next/config";


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  data: any;
  comments: any;
}


export default function ProductByExternalId<NextPage>(props: IProps) {
  return (
    <Layout>
      <Head>
        <title>{ props['data']['title'] }</title>

        <meta name={'og:title'} content={props['data']['title']} />
        <meta name={'og:type'} content={'website'} />
        {props['data']['images'][0] && (
          <meta name={'og:image'} content={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + props['data']['images'][0]['uuid'] + '?width=124'} />
        )}
        <meta name={'og:url'} content={
          process.env['WEBSITE_URL'] +
          '/catalog/' +
          props['data']['group']['code'] + '/' +
          props['data']['category']['code'] + '/' +
          props['data']['externalId']
        } />
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const { externalId }: any = props['query'];
  const product = await getProduct(externalId);
  const comments = await getComments(product['data']['uuid']);

  return {
    props: {
      data: product['data'],
      comments: { data: comments['data'], meta: { totalRows: comments['meta']['totalRows'] }},
    },
  };
}
