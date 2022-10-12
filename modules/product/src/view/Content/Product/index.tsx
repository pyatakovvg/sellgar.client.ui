
import React from 'react';

import Title from './Title';
import Price from './Price';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  externalId: string;
  group: any;
  price: number;
  currency: any;
  category: any;
  title: string;
  brand: any;
  comments: any;
}


function Product({ uuid, title, brand, comments, price, currency, externalId, group, category }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Title title={title} brand={brand} />
      </div>
      <div className={styles['price']}>
        <Price uuid={uuid} price={price} currency={currency} />
      </div>
      <div className={styles['rating']}>
        <Comments comments={comments} externalId={externalId} group={group} category={category} />
      </div>
    </div>
  );
}

export default Product;
