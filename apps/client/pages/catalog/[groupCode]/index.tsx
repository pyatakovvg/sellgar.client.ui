
import Layout from '@layout/default';
import Module, { getGroup } from '@module/categories';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: any;
}


export default function Categories<NextPage>(props: IProps) {
  return (
    <Layout>
      <Head>
        <title>{ props['data']['name'] }</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const params = props['params'];
  const group = await getGroup({
    code: params['groupCode'],
  });

  return {
    props: {
      data: group,
    },
  };
}
