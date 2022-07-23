
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Categories({ groupCode, items }: any) {
  return (
    <section className={styles['wrapper']}>
      {items.map((item: any) => (
        <div key={item['uuid']} className={styles['item']}>
          <Item groupCode={groupCode} {...item} />
        </div>
      ))}
    </section>
  );
}

export default Categories;
