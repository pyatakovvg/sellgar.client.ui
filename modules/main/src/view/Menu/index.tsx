
import { Text } from '@library/kit';

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
        <Link href={'/catalog'}>
          <a>
            <Text>Перейти в каталог</Text>
          </a>
        </Link>
      </div>
    </menu>
  );
}

export default Navigate;
