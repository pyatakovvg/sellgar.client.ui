
import { nounDeclension } from '@helper/utils';

import React from 'react';
import Link from 'next/link';

import cn from "classnames";
import styles from './@media/index.module.scss';


function Item({ groupCode, icon, code, name, products }: any) {
  const thumbClassName = React.useMemo(() => cn(styles['thumb'], icon), []);

  return (
    <Link className={styles['wrapper']} href={'/catalog/' + groupCode + '/' + code}>
      <div className={styles['icon']}>
        <span className={thumbClassName}/>
      </div>
      <div className={styles['information']}>
        <span className={styles['content']}>{ name }</span>
        <span className={styles['count']}>{ products } { nounDeclension(products, ['товар', 'товара', 'товаров']) }</span>
      </div>
    </Link>
  );
}

export default Item;
