
import Layout from '@layout/default';
import Module, { getProduct, getComments, addOpinionRequestSuccess } from '@module/product';
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


export default function ProductByExternalId<NextPage>(props: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucketSuccessRequestAction(props['bucket']));
    dispatch(addOpinionRequestSuccess(props['comments']));
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
  const product = await getProduct(externalId);
  const comments = await getComments(product['data']['uuid']);

  return {
    props: {
      bucket: bucket['data'],
      data: product['data'],
      comments: comments,
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
