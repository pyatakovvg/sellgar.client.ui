
import { Header } from "@library/kit";

import React from 'react';

import Item from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  products: Array<any>;
}


function Products({  products }: IProps): JSX.Element {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Товар</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>
          {products.map((item) => (
            <div key={item['uuid']} className={styles['item']}>
              <Item {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
