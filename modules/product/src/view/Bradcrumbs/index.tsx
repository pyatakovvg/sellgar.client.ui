
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Helper({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['item']}>
        <Link href={'/'}>
          <a className={styles['link']}>
            <span className={cn(styles['home'], 'fa-solid fa-house')} />
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link href={'/catalog/' + data?.['group']?.['code']}>
          <a className={styles['link']}>
            <Text>{ data?.['group']?.['name'] }</Text>
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link href={'/catalog/' + data?.['group']?.['code'] + '/' + data?.['category']?.['code']}>
          <a className={styles['link']}>
            <Text>{ data?.['category']?.['name'] }</Text>
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Text className={styles['name']}>{ data?.['title'] }</Text>
      </div>
    </section>
  );
}

export default Helper;
