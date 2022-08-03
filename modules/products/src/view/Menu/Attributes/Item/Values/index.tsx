
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Attributes({ items }: any) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item: any, index: number) => (
        <div key={index} className={styles['item']}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}

export default Attributes;
