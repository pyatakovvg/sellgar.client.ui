
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {}


function Helper({ }: IProps): JSX.Element {
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
        <Text className={styles['name']}>Каталог</Text>
      </div>
    </section>
  );
}

export default Helper;
