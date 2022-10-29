
import numeral from '@package/numeral';
import { Button, Text } from '@library/kit';
import { addToBucket, selectData } from '@widget/bucket';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  products: Array<any>;
}


function Controls({ products }: IProps) {
  const dispatch = useDispatch();

  const bucket = useSelector(selectData) as any;
  const product = products.find((item) => item['isTarget']);
  const productInBucket =  bucket ? bucket['products'].find((item: any) => item['product']['uuid'] === product['product']['uuid']) : null;
  const productsInBucket = bucket ? bucket['products'].filter((item: any) => products.some((buck: any) => buck['product']['uuid'] === item['product']['uuid'])) : null;

  function handleAddToCart() {
    dispatch(addToBucket({
      bucketUuid: bucket?.['uuid'],
      productUuid: product['product']['uuid'],
      count: (productInBucket?.['count'] ?? 0) + 1,
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['price']}>
          <Text className={styles['amount']}>{ `${numeral(product['product']['price']).format() } ${ product['product']['currency']['displayName'] }` }</Text>
        </div>
        <div className={styles['controls']}>
          <Button mode={'info'} size={'middle'} onClick={handleAddToCart}>В корзину</Button>
        </div>
        { !! productsInBucket?.length && (
          <div className={styles['bucket']}>
            {productsInBucket.map((product: any) => {
              return <Text type={'description'}>{product['product']['label']} уже в корзине ({ product['count'] })</Text>
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Controls;
