
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
  allCommentCount: number;
}


function Product(props: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Title name={props['name']} brand={props['product']['brand']} vendor={props['product']['vendor']} />
      </div>
      <div className={styles['price']}>
        <Price uuid={props['uuid']} product={props['product']} />
      </div>
      <div className={styles['rating']}>
        <Comments {...props} />
      </div>
    </div>
  );
}

export default Product;
