
import numeral from '@package/numeral';
import { Button, Header, Text } from '@library/kit';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';

import { selectData } from '../../../store/slice';
import { destroyCart } from '../../../store/commands';

import styles from './@media/index.module.scss';


function Content({ onCheckout }: any) {
  const dispatch = useDispatch();
  const bucket = useSelector(selectData) as any;

  function handleDestroy() {
    dispatch(destroyCart());
  }

  if ( ! bucket) {
    return (
      <div className={styles['wrapper']}>
        <Text>В корзине нет товаров</Text>
      </div>
    );
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
          <Button mode={'success'} onClick={onCheckout}>Оформить</Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
