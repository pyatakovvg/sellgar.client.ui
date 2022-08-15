
import Layout from '@layout/default';
import { getBucketRequest, getBucketSuccessRequestAction } from '@widget/bucket';
import Module, { getCategoryRequest, getBrandsRequest, getAttributesRequest, getProductsRequest } from '@module/products';

import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';


interface IProps {
  bucket: any;
  category: any;
  brands: Array<any>;
  attributes: Array<any>;
  data: Array<any>;
  meta: any;
  env: any;
}


export default function Main<NextPage>(props: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.env = props['env'];
    dispatch(getBucketSuccessRequestAction(props['bucket']));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{ `${process.env['TITLE']} ${props['category']['name']}.` }</title>
      </Head>
      <Module {...props} />
    </Layout>
  );
}

export async function getServerSideProps(props: any) {
  const query = props['query'];
  const params = props['params'];

  const bucket = await getBucketRequest(props['req']['headers']);
  const category = await getCategoryRequest({
    code: params['categoryCode'],
  });
  const brands = await getBrandsRequest({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
  });
  const attributes = await getAttributesRequest({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
    brandCode: query?.['brand'] || undefined,
  });
  const result = await getProductsRequest({
    ...query,
    brandCode: query?.['brand'] || undefined,
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((query?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
  });

  return {
    props: {
      bucket: bucket['data'],
      category: category['data'][0],
      brands: brands['data'],
      attributes: attributes['data'],
      data: result['data'],
      meta: result['meta'],
      env: {
        TAKE_PRODUCTS: Number(process.env['TAKE_PRODUCTS']),
        GATEWAY_SERVICE_API: process.env['GATEWAY_SERVICE_API'],
      },
    },
  };
}
