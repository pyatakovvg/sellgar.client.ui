
import React from 'react';

import Title from './Title';
import Price from './Price';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  externalId: string;
  group: any;
  category: any;
  name: string;
  product: any;
  comments: any;
}


function Product({ uuid, name, product, externalId, group, category }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Title name={name} brand={product['brand']} vendor={product['vendor']} />
      </div>
      <div className={styles['price']}>
        <Price uuid={uuid} product={product} />
      </div>
      <div className={styles['rating']}>
        <Comments externalId={externalId} group={group} category={category} />
      </div>
    </div>
  );
}

export default Product;
