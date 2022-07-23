
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


function Item({ code, name }: any) {
  return (
    <section className={styles['wrapper']}>
      <Link href={'/catalog/' + code}>
        <a>
          <Text>{ name }</Text>
        </a>
      </Link>
    </section>
  );
}

export default Item;
