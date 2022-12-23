
import numeral from '@package/numeral';
import { Button, Text } from '@library/kit';
import { addToBucket, selectData, selectInUpdateProcess } from '@widget/bucket';

import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  product: any;
}


function Controls({ product }: IProps) {
  const dispatch = useDispatch();

  const bucket = useSelector(selectData) as any;
  const inBucketProcess = useSelector(selectInUpdateProcess) as Array<string>;
  const productInBucket =  bucket ? bucket['products'].find((item: any) => {
    return item['product']['uuid'] === product['uuid']
  }) : null;

  function handleAddToCart() {
    dispatch(addToBucket({
      bucketUuid: bucket?.['uuid'],
      productUuid: product['uuid'],
      count: (productInBucket?.['count'] ?? 0) + 1,
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['price']}>
          <Text className={styles['amount']}>{ `${numeral(product['price']).format() } ${ product['currency']['displayName'] }` }</Text>
        </div>
        <div className={styles['controls']}>
          <Button
            mode={'info'}
            size={'middle'}
            onClick={handleAddToCart}
            inProcess={ !!~ inBucketProcess.indexOf(product['uuid'])}
          >В корзину</Button>
        </div>
        { !! productInBucket && (
          <Link className={styles['bucket']} href={'/checkout'}>
            <Text type={'description'}>уже { productInBucket['count'] } в корзине</Text>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Controls;
