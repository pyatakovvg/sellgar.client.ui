
import Layout from '@layout/default';
import Module, { getProduct, getComments } from '@module/product';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: any;
  comments: any;
}


export default function ProductByExternalId<NextPage>(props: IProps) {
  return (
    <Layout>
      <Head>
        <title>{ props['data']['title'] }</title>
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
