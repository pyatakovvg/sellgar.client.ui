
import React from 'react';

import Label from './Label';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  products: Array<any>;
  onClick(product: any): void;
}


function Products({ uuid, products, onClick }: IProps) {
  function handleClick(product: any) {
    onClick(product);
  }

  return (
    <div className={styles['wrapper']}>
      {products.map((product: any) => {
        return (
          <div key={product['uuid']} className={styles['label']}>
            <Label isActive={product['uuid'] === uuid} {...product} onClick={() => handleClick(product)} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
