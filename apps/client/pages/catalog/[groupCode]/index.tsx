
import Layout from '@layout/default';
import { getBucket } from '@widget/bucket';
import Module, { getGroupRequest, getCategoriesRequest } from '@module/categories';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  group: any;
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Categories(props: IProps) {
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

export async function getServerSideProps(props: any) {
  const params = props['params'];
  const group = await getGroupRequest({
    code: params['groupCode'],
  });
  const result = await getCategoriesRequest({
    groupCode: params['groupCode'],
  });

  return {
    props: {
      group: group['data'][0],
      data: result['data'],
      meta: result['meta'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
