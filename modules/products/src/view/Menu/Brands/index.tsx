
import { Text } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Brands({ brands }: any) {
  return (
    <menu className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text>Производитель</Text>
      </div>
      <div className={styles['content']}>
        {brands.map((item: any) => {
          return (
            <div key={item['uuid']} className={styles['item']}>
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </menu>
  );
}

export default Brands;
