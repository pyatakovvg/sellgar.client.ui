
import { Header } from '@library/kit';

import React from 'react';

import Modes from './Modes';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  externalId: string;
  group: any;
  category: any;
  title: string;
  brand: any;
  modes: Array<any>;
  comments: any;
  onToCart(item: any): void;
}


function Product({ title, brand, modes, comments, onToCart, externalId, group, category }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Header level={3}>{ brand['name'] } { title }</Header>
      </div>
      <div className={styles['rating']}>
        <Comments comments={comments} externalId={externalId} group={group} category={category} />
      </div>
      <div className={styles['modes']}>
        <Modes modes={modes} onToCart={onToCart} />
      </div>
    </div>
  );
}

export default Product;
