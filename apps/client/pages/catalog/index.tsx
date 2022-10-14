
import Layout from '@layout/default';
import Module, { getGroups } from '@module/groups';

import React from 'react';
import Head from 'next/head';


interface IProps {
  data: Array<any>;
}


export default function Groups<NextPage>(props: IProps) {
  return (
    <Layout>
      <Head>
        <title>Каталог товаров</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const groups = await getGroups();

  return {
    props: {
      data: groups,
    },
  };
}
