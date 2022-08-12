
import Layout from '@layout/default';
import { getBucketRequest, getBucketSuccessRequestAction } from '@widget/bucket';
import Module, { getGroupRequest, getCategoriesRequest } from '@module/categories';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  bucket: any;
  group: any;
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Categories(props: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucketSuccessRequestAction(props['bucket']));
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
  const bucket = await getBucketRequest(props['req']['headers']);
  const group = await getGroupRequest({
    code: params['groupCode'],
  });
  const result = await getCategoriesRequest({
    groupCode: params['groupCode'],
  });

  return {
    props: {
      bucket: bucket['data'],
      group: group['data'][0],
      data: result['data'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
