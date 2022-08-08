
import { nounDeclension } from '@helper/utils';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


function Item({ groupCode, code, name, productsCount }: any) {
  return (
    <Link href={'/catalog/' + groupCode + '/' + code}>
      <a className={styles['wrapper']}>
        <span className={styles['content']}>{ name }</span>
        <span className={styles['count']}>{ productsCount } { nounDeclension(productsCount, ['товар', 'товара', 'товаров']) }</span>
      </a>
    </Link>
  );
}

export default Item;
