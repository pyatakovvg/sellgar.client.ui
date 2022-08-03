
import React from 'react';

import Sort from './Sort';

import styles from './@media/index.module.scss';


function Filter() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <Sort />
      </div>
    </div>
  );
}

export default Filter;
