
import React from 'react';
import Link from 'next/link';

import Categories from './Categories';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function Item({ code, name, categories, productsCount }: any) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-angle-right'), []);

  return (
    <section className={styles['wrapper']}>
      <Link href={'/catalog/' + code}>
        <a className={styles['link']}>
          <span className={styles['content']}>{ name }</span>
          <span className={styles['count']}>{ productsCount } тов.</span>
          <span className={styles['control']}>
            <span className={iconClassName} />
          </span>
        </a>
      </Link>
      <div className={styles['category']}>
        <Categories groupCode={code} items={categories} />
      </div>
    </section>
  );
}

export default Item;
