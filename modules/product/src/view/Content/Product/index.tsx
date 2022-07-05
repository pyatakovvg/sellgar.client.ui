
import { Header } from '@library/kit';

import React from 'react';

import Modes from './Modes';

import styles from './@media/index.module.scss';


interface IProps {
  brand: any;
  modes: Array<any>;
}


function Product({ brand, modes }: IProps): JSX.Element {
  function handleChange() {

  }
  return (
    <div className={styles['wrapper']}>
      <div>
        <Header level={4}>{ brand['name'] }</Header>
      </div>
      <div className={styles['modes']}>
        <Modes modes={modes} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Product;
