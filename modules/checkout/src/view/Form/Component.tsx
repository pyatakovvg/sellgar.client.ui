
import React from 'react';

import Customer from './Customer';
import Delivery from './Delivery';
import Payment from './Payment';
import Products from './Products';

import styles from './@media/index.module.scss';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
  handleSubmit(): void;
}


function Content({ delivery, payments, handleSubmit }: IProps) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <Customer />
        </div>
        <div className={styles['block']}>
          <Delivery data={delivery} />
        </div>
        <div className={styles['block']}>
          <Payment data={payments} />
        </div>
        <div className={styles['block']}>
          <Products />
        </div>
      </div>
    </form>
  );
}

export default Content;
