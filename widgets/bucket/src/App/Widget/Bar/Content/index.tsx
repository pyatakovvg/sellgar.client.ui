
import numeral from '@package/numeral';
import { Button, Header } from '@library/kit';

import React from 'react';
import { useRouter } from 'next/router';

import Product from './Product';

import { useBucketData } from '../../../store/slice';
import { cleanBucket, changeOpen } from '../../../store/commands';

import styles from './@media/index.module.scss';


function Content() {
  const router = useRouter();
  const bucket = useBucketData();

  async function handleDestroy() {
    await cleanBucket({ bucketUuid: bucket['uuid'] });
    changeOpen(false);
  }

  async function handleCheckout() {
    changeOpen(false);
    await router.push('/checkout');
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {bucket['products'].map((item: any) => (
          <div key={item['product']['uuid']} className={styles['item']}>
            <Product bucketUuid={bucket['uuid']} {...item} />
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

export default React.memo(Content);
