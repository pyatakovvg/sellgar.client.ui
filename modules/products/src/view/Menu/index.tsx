
import React from 'react';

import Brands from './Brands';
import Attributes from './Attributes';

import styles from './@media/index.module.scss';


function Navigate({ brands, attributes }: any) {
  return (
    <menu className={styles['wrapper']}>
      <div className={styles['block']}>
        <Brands brands={brands} />
      </div>
      <div className={styles['block']}>
        <Attributes attributes={attributes} />
      </div>
    </menu>
  );
}

export default Navigate;
