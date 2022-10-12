
import { Button } from '@library/kit';
import numeral from '@package/numeral';
import { addToBucket, selectData } from "@widget/bucket";

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Bucket from './Bucket';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  price: number;
  currency: any;
}


function Price({ uuid, price, currency }: IProps) {
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

  function handleChange(value: number) {
    dispatch(addToBucket({
      count: value,
      productUuid: uuid,
      uuid: product?.['uuid'] ?? null,
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <div className={styles['amount']}>{ numeral(price).format() } { currency['displayName'] }</div>
      </div>
      { !! product && (
        <div className={styles['bucket']}>
          <Bucket count={product['count']} onChange={handleChange} />
        </div>
      )}
      <div className={styles['button']}>
        <Button mode={'info'} onClick={handleAddToCart}>Купить</Button>
      </div>
    </div>
  );
}

export default Price;
