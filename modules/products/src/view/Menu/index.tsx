
import React from 'react';

import Price from './Price';
import Brands from './Brands';
import Attributes from './Attributes';

import styles from './@media/index.module.scss';


function Navigate({ brands, attributes }: any) {
console.log(attributes)
  return (
    <menu className={styles['wrapper']}>
      <div className={styles['block']}>
        <Brands brands={brands} />
      </div>
      <div className={styles['block']}>
        <Price />
      </div>
      <div className={styles['block']}>
        <Attributes attributes={attributes} />
      </div>
    </menu>
  );
}

export default Navigate;
