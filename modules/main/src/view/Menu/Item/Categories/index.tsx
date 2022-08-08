
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Categories({ groupCode, items }: any) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item: any) => (
        <div key={item['code']} className={styles['item']}>
          <Item groupCode={groupCode} {...item} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
