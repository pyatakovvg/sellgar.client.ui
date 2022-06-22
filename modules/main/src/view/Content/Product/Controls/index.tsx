
import numeral from '@package/numeral';
import { Button, Header } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  item: any;
}


function Controls({ item }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <Header level={4}>{ `${numeral(item?.['price'] ?? 0).format() } ${ item?.['currency']?.['displayName'] ?? ''}` }</Header>
      </div>
      <div className={styles['controls']}>
        <Button>В корзину</Button>
      </div>
    </div>
  );
}

export default Controls;
