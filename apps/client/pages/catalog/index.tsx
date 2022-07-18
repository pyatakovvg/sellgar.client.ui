
import Layout from '@layout/default';
import { getBucket } from '@widget/bucket';
import Module, { getGroupsRequest } from '@module/groups';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Groups(props: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucket());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Sellgar - Каталог</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const result = await getGroupsRequest();

  return {
    props: {
      data: result['data'],
      meta: result['meta'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
