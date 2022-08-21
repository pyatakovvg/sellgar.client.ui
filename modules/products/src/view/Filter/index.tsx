
import React from 'react';

import Sort from './Sort';

import styles from './@media/index.module.scss';


function Filter({ category }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <Sort category={category} />
      </div>
    </div>
  );
}

export default Filter;
