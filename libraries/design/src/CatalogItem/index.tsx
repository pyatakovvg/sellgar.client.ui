
import { Text } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  productsCount: number;
}


function Product({ name, productsCount }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']}>

      </div>
      <div className={styles['content']}>
        <div className={styles['text']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
        <div className={styles['description']}>
          <Text type={'description'}>{ productsCount } { nounDeclension(productsCount, ['товар', 'товара', 'товаров']) }</Text>
        </div>
      </div>
    </div>
  );
}

export default Product;
