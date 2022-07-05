
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Helper({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['item']}>
        <Link href={'/?group=' + data?.['group']?.['name']}>
          <a className={styles['link']}>
            <Text>{ data?.['group']?.['name'] }</Text>
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link href={'/?category=' + data?.['category']?.['name']}>
          <a className={styles['link']}>
            <Text>{ data?.['category']?.['name'] }</Text>
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link href={'/?brand=' + data?.['brand']?.['name']}>
          <a className={styles['link']}>
            <Text>{ data?.['brand']?.['name'] }</Text>
          </a>
        </Link>
      </div>
      <div className={styles['item']}>
        <Text>{ data?.['title'] }</Text>
      </div>
    </section>
  );
}

export default Helper;
