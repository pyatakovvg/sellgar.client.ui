
import { Header } from '@library/kit';

import React from 'react';

import Modes from './Modes';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  title: string;
  brand: any;
  modes: Array<any>;
  onToCart(item: any): void;
}


function Product({ title, brand, modes, onToCart }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Header level={3}>{ brand['name'] } { title }</Header>
      </div>
      <div className={styles['rating']}>
        <Comments />
      </div>
      <div className={styles['modes']}>
        <Modes modes={modes} onToCart={onToCart} />
      </div>
    </div>
  );
}

export default Product;
