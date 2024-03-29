
import React from 'react';
import Link from 'next/link';

import Item from './Item';

import styles from './@media/index.module.scss';


function Navigate({ groups }: any) {
  return (
    <menu className={styles['wrapper']}>
      <div className={styles['content']}>
        {groups.map((item: any) => {
          return (
            <div key={item['code']} className={styles['item']}>
              <Item {...item} />
            </div>
          );
        })}
      </div>
      <div className={styles['control']}>
        <Link className={styles['link']} href={'/catalog'}>Перейти в каталог</Link>
      </div>
    </menu>
  );
}

export default Navigate;
