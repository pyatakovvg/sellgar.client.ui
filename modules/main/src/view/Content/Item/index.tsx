
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import Categories from './Categories';

import styles from './@media/index.module.scss';


function Item({ code, name, categories }: any) {
  return (
    <section className={styles['wrapper']}>
      <Link href={'/catalog/' + code}>
        <a>
          <Text>{ name }</Text>
        </a>
      </Link>
      <div className={styles['category']}>
        <Categories items={categories} />
      </div>
    </section>
  );
}

export default Item;
