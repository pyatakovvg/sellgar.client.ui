
import Layout from '@layout/default';
import Module, { getGroup } from '@module/categories';

import React from 'react';
import Head from 'next/head';


interface IProps {
  title: string;
  data: any;
}


export default function Categories<NextPage>({ title, ...rest }: IProps) {
  return (
    <Layout>
      <Head>
        <title>{ title }</title>
      </Head>
      <Module {...rest} />
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
      title: `${process.env['TITLE']} ${group['name']}.`,
      data: group,
    },
  };
}
