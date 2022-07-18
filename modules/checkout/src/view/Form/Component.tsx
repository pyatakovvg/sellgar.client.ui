
import { Text, Button } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import Customer from './Customer';
import Delivery from './Delivery';
import Payment from './Payment';
import Products from './Products';

import { selectData } from '../../store/slice';

import styles from './@media/index.module.scss';


function Content({ delivery, payments, handleSubmit, valid, pristine }: any): JSX.Element {
  const checkout = useSelector(selectData) as any;

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
          <Products {...checkout} />
        </div>
      </div>
      <div className={styles['controls']}>
        <div className={styles['buttons']}>
          <Button type={'submit'} mode={'success'} disabled={ ! valid || pristine}>Подтвердить заказ</Button>
        </div>
        <div className={styles['description']}>
          <Text type={'description'}>Подтверждая заказ, Вы соглашаетесь с условиями политики <Link href={'/checkout/policy'}><a target={'_blank'} className={styles['link']}>конфиденциальности и правилами продажи.</a></Link></Text>
        </div>
      </div>
    </form>
  );
}

export default Content;
