
import numeral from '@package/numeral';
import { Button, Text } from '@library/kit';
import { addToBucket, selectData } from '@widget/bucket';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  price: number;
  currency: any;
}


function Controls({ uuid, price, currency }: IProps) {
  const dispatch = useDispatch();

  const bucket = useSelector(selectData) as any;
  const product =  bucket ? bucket['products'].filter((item: any) => item['product']['uuid'] === uuid)[0] : null;

  function handleAddToCart() {
    dispatch(addToBucket({
      productUuid: uuid,
      uuid: product?.['uuid'] ?? null,
      count: (product?.['count'] ?? 0) + 1,
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <Text className={styles['amount']}>{ `${numeral(price).format() } ${ currency['displayName'] }` }</Text>
      </div>
      <div className={styles['controls']}>
        <Button mode={'info'} size={'middle'} onClick={handleAddToCart}>В корзину</Button>
      </div>
      { !! product && (
        <div className={styles['bucket']}>
          <Text type={'description'}>уже { product['count'] } в корзине</Text>
        </div>
      )}
    </div>
  );
}

export default Controls;
