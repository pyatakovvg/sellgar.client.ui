
import { Text } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Brands({ brands }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text type={'strong'}>Производитель</Text>
      </div>
      <div className={styles['content']}>
        {brands.map((item: any) => {
          return (
            <div key={item['code']} className={styles['item']}>
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
