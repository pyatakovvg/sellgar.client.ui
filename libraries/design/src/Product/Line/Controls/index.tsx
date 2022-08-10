
import numeral from '@package/numeral';
import { Button, Header } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  item: any;
  onAddToBucket(): void;
}


function Controls({ item, onAddToBucket }: IProps): JSX.Element {
  function handleAddToCart() {
    onAddToBucket();
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <Header level={4}>{ `${numeral(item?.['price'] ?? 0).format() } ${ item?.['currency']?.['displayName'] ?? ''}` }</Header>
      </div>
      <div className={styles['controls']}>
        <Button mode={'info'} onClick={handleAddToCart}>В корзину</Button>
      </div>
    </div>
  );
}

export default Controls;
