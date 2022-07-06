
import Layout from '@layout/default';
import { getBucket } from '@widget/bucket';
import Module, { getProduct } from '@module/product';

import React from 'react';
import Head from 'next/head';
import { NextApiRequest } from 'next';
import { useDispatch } from 'react-redux';


interface IProps {
  data: Array<any>;
  comments: any;
  env: any;
}


export default function ProductByExternalId(props: IProps): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucket());
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

export async function getServerSideProps(req: NextApiRequest) {
  const { externalId }: any = req['query'];
  const result = await getProduct(externalId);

  return {
    props: {
      data: result['data']['product'],
      comments: result['data']['comments'],
      env: {
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
