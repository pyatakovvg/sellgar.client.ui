
import React from 'react';

import Products from './Products';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Checkout({ data }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <Products {...data} />
        </div>
        <div className={styles['block']}>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
