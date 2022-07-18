
import numeral from '@package/numeral';
import { Header, Text } from "@library/kit";
import { nounDeclension } from '@helper/utils';

import React from 'react';

import Item from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  price: number;
  currency: any;
  products: Array<any>;
}


function Products({ products = [], price, currency }: IProps): JSX.Element {
  const count = React.useMemo(() => products.reduce((accum, item) => accum + item['count'], 0), [products]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Выбрано { count } { nounDeclension(count, ['товар', 'товара', 'товаров']) } на общую сумму { numeral(price).format() } { currency['displayName'] }</Header>
      </div>
      <div className={styles['content']}>
        { !! products.length && (
          <div className={styles['container']}>
            {products.map((item) => (
              <div key={item['uuid']} className={styles['item']}>
                <Item {...item} />
              </div>
            ))}
          </div>
        )}
        { ! products.length && (
          <Text>В заказе нет выбранных товаров</Text>
        )}
      </div>
    </div>
  );
}

export default Products;
