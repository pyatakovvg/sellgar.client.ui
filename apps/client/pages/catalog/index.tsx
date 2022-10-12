
import Layout from '@layout/default';
import Module, { getGroups } from '@module/groups';

import React from 'react';
import Head from 'next/head';


interface IProps {
  title: string;
  data: Array<any>;
}


export default function Groups<NextPage>({ title, ...rest }: IProps) {
  return (
    <Layout>
      <Head>
        <title>{ title }</title>
      </Head>
      <Module {...rest} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const groups = await getGroups();

  return {
    props: {
      title: `${process.env['TITLE'] } Каталог.`,
      data: groups,
    },
  };
}
