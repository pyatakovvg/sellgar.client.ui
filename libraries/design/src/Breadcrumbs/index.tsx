
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IItem {
  href?: string;
  name: string;
}

interface IProps {
  data: Array<IItem>;
}


function Breadcrumbs({ data }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['item']}>
        <Link className={styles['link']} href={'/'}>
          <span className={cn(styles['home'], 'fa-solid fa-house')} />
        </Link>
      </div>
      {data.map((item, index) => {
        if ( ! item['href']) {
          return (
            <div key={index} className={styles['item']}>
              <Text type={'strong'} className={styles['name']}>{ item['name'] }</Text>
            </div>
          );
        }
        return (
          <div key={index} className={styles['item']}>
            <Link className={styles['link']} href={item['href']}>
              <Text type={'strong'}>{ item['name'] }</Text>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Breadcrumbs;
