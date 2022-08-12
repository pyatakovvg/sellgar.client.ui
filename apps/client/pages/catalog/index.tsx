
import Layout from '@layout/default';
import Module, { getGroupsRequest } from '@module/groups';
import { getBucketRequest, getBucketSuccessRequestAction } from '@widget/bucket';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  bucket: any;
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Groups(props: IProps) {
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

export async function getServerSideProps({ req }: any) {
  const bucket = await getBucketRequest(req['headers']);
  const result = await getGroupsRequest();

  return {
    props: {
      bucket: bucket['data'],
      data: result['data'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
