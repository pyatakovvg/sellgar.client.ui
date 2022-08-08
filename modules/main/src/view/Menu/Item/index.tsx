
import React from 'react';
import Link from 'next/link';

import Categories from './Categories';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function Item({ code, icon, name, categories, productsCount }: any) {
  const thumbClassName = React.useMemo(() => cn(styles['thumb'], icon), []);
  const arrowClassName = React.useMemo(() => cn(styles['arrow'], 'fa-solid fa-angle-right'), []);

  return (
    <nav className={styles['wrapper']}>
      <Link href={'/catalog/' + code}>
        <a className={styles['content']}>
          <div className={styles['icon']}>
            <span className={thumbClassName}/>
          </div>
          <div className={styles['information']}>
            <span className={styles['name']}>{ name }</span>
            <span className={styles['count']}>{ productsCount } тов.</span>
          </div>
          <div className={styles['control']}>
            <span className={arrowClassName} />
          </div>
        </a>
      </Link>
      <div className={styles['category']}>
        <Categories groupCode={code} items={categories} />
      </div>
    </nav>
  );
}

export default Item;
