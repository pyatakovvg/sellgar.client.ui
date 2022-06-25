
import React from 'react';

import styles from './@media/index.module.scss';
import {Header} from "@library/kit";


interface IProps {}


function Products({  }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Товар</Header>
      </div>
      <div className={styles['content']}>

      </div>
    </div>
  );
}

export default Products;
