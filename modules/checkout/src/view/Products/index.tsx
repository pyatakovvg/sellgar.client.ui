
import numeral from '@package/numeral';
import { Header } from "@library/kit";

import React from 'react';

import Product from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  externalId: number;
  price: number;
  currency: any;
  products: Array<any>;
}


function Products({ externalId, price, currency, products }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Оформлен заказ №{ numeral(externalId).format('000000') } на сумму { numeral(price).format() } { currency['displayName'] }</Header>
      </div>
      <div className={styles['content']}>
        {products.map((item: any) => (
          <div key={item['uuid']} className={styles['item']}>
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
