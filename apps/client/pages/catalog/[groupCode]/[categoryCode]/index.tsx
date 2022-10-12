
import Layout from '@layout/default';
import Module, { getCategory, getBrands, getAttributes, getProducts } from '@module/products';

import React from 'react';
import Head from 'next/head';


interface IProps {
  title: string;
  category: any;
  brands: Array<any>;
  attributes: Array<any>;
  data: Array<any>;
  meta: any;
}


export default function Main<NextPage>({ title, ...rest }: IProps) {
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
  const query = props['query'];
  const params = props['params'];

  const category = await getCategory({
    code: params['categoryCode'],
  });
  const brands = await getBrands({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
  });
  const attributes = await getAttributes({
    groupCode: params['groupCode'],
    categoryCode: params['categoryCode'],
    brandCode: query?.['brand'] || undefined,
  });
  const result = await getProducts({
    ...query,
    // sort: Number(query?.['sort'] || 1),
    brandCode: query?.['brand'] || undefined,
    take: Number(process.env['TAKE_PRODUCTS']),
    skip: Number((query?.['page'] ?? 1) - 1) * Number(process.env['TAKE_PRODUCTS']),
  });

  return {
    props: {
      title: `${process.env['TITLE']} ${category['name']}.`,
      category,
      brands,
      attributes,
      data: result['data'],
      meta: result['meta'],
    },
  };
}
