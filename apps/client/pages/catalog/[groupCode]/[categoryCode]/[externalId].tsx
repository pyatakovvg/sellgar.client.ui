
import Layout from '@layout/default';
import Module, { getProduct } from '@module/product';
import { getBucketRequest, getBucketSuccessRequestAction } from '@widget/bucket';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  bucket: any;
  data: Array<any>;
  comments: any;
  env: any;
}


export default function ProductByExternalId(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucketSuccessRequestAction(props['bucket']));
  }, []);

  return (
    <Layout>
      <Head>
        <title>Товар</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const { externalId }: any = props['query'];
  const bucket = await getBucketRequest(props['req']['headers']);
  const result = await getProduct(externalId);

  return {
    props: {
      bucket: bucket['data'],
      data: result['data']['product'],
      comments: result['data']['comments'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
