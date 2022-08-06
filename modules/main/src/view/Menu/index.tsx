
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Navigate({ groups }: any) {
  return (
    <menu className={styles['wrapper']}>
      {groups.map((item: any) => {
        return (
          <div key={item['code']} className={styles['item']}>
            <Item {...item} />
          </div>
        );
      })}
    </menu>
  );
}

export default Navigate;
