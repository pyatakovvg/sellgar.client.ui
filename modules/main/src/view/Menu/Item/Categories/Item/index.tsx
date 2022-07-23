
import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


function Item({ groupCode, code, name, productsCount }: any) {
  return (
    <section className={styles['wrapper']}>
      <Link href={'/catalog/' + groupCode + '/' + code}>
        <a className={styles['link']}>
          <span className={styles['content']}>{ name }</span>
          <span className={styles['count']}>{ productsCount } тов.</span>
        </a>
      </Link>
    </section>
  );
}

export default Item;
