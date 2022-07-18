
import { Header } from '@library/kit';

import React from 'react';

import Modes from './Modes';

import styles from './@media/index.module.scss';


interface IProps {
  brand: any;
  modes: Array<any>;
  onToCart(item: any): void;
}


function Product({ brand, modes, onToCart }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div>
        <Header level={4}>{ brand['name'] }</Header>
      </div>
      <div className={styles['modes']}>
        <Modes modes={modes} onToCart={onToCart} />
      </div>
    </div>
  );
}

export default Product;
