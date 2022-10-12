
import numeral from '@package/numeral';
import { Button, Header } from '@library/kit';

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';

import { selectData } from '../../../store/slice';
import { cleanBucket, changeOpen } from '../../../store/commands';

import styles from './@media/index.module.scss';


function Content() {
  const router = useRouter();
  const dispatch = useDispatch();
  const bucket = useSelector(selectData) as any;

  function handleDestroy() {
    dispatch(cleanBucket());
    dispatch(changeOpen(false));
  }

  async function handleCheckout() {
    dispatch(changeOpen(false));
    await router.push('/checkout');
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {bucket['products'].map((item: any) => (
          <div key={item['uuid']} className={styles['item']}>
            <Product {...item} />
          </div>
        ))}
      </div>
      <div className={styles['controls']}>
        <div className={styles['price']}>
          <Header level={4}>Сумма: { numeral(bucket['price']).format() } { bucket['currency']['displayName'] }</Header>
        </div>
        <div className={styles['buttons']}>
          <Button form={'context'} mode={'danger'} onClick={handleDestroy}>Очистить</Button>
          <Button mode={'success'} onClick={handleCheckout}>Оформить</Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
