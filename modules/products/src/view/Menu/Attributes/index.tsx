
import { Text } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Attributes({ attributes }: any) {
  return (
    <menu className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text>Аттрибуты</Text>
      </div>
      <div className={styles['content']}>
        {attributes.map((item: any) => {
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

export default Attributes;
