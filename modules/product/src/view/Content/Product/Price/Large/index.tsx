
import numeral from '@package/numeral';
import { Button, Text } from '@library/kit';
import { addToBucket, cleanBucket, selectData } from "@widget/bucket";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bucket from './Bucket';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  product: any;
}


function Price({ product }: IProps) {
  const dispatch = useDispatch();

  const bucket = useSelector(selectData) as any;
  const productInBucket =  bucket ? bucket['products'].filter((item: any) => item['product']['uuid'] === product['product']['uuid'])[0] : null;

  function handleAddToCart() {
    dispatch(addToBucket({
      bucketUuid: bucket?.['uuid'],
      productUuid: product['product']['uuid'],
      count: (productInBucket?.['count'] ?? 0) + 1,
    }));
  }

  function handleChange(value: number) {
    dispatch(addToBucket({
      count: value,
      bucketUuid: bucket?.['uuid'],
      productUuid: product['product']['uuid'],
    }));
  }

  function handleDelete() {
    dispatch(cleanBucket({
      bucketUuid: bucket?.['uuid'],
      productUuid: product['product']['uuid'],
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <div className={styles['amount']}>
          { numeral(product['product']['price']).format() } { product['product']['currency']['displayName'] }
        </div>
        {product['label'] && (
          <div className={styles['label']}>
            <Text>"{ product['label'] }"</Text>
          </div>
        )}
      </div>
      { !! productInBucket && (
        <div className={styles['bucket']}>
          <Bucket
            count={productInBucket['count']}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        </div>
      )}
      <div className={styles['button']}>
        <Button mode={'info'} onClick={handleAddToCart}>Купить</Button>
      </div>
    </div>
  );
}

export default Price;
