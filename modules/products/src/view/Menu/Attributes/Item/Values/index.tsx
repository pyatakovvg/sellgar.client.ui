
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function AttributeValues({ code, items }: any) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item: any, index: number) => (
        <div key={index} className={styles['item']}>
          <Item code={code} {...item} />
        </div>
      ))}
    </div>
  );
}

export default AttributeValues;
