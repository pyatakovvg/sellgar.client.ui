
import { Button, Header } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';

import { selectData } from '../../../store/slice';

// import cn from 'classnames';
import styles from './@media/index.module.scss';


function Content({ onCheckout }: any) {
  const bucket = useSelector(selectData) as any;

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
          <Button form={'context'} mode={'danger'}>Очистить</Button>
          <Button mode={'success'} onClick={onCheckout}>Оформить</Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
