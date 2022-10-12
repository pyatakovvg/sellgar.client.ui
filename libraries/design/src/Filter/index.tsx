
import { Text } from '@library/kit';

import React from 'react';

import Sort from './Sort';

import styles from './@media/index.module.scss';


function Filter({ meta }: any) {
  const rows = meta['totalRows'];

  return (
    <div className={styles['wrapper']}>
      <div className={styles['filter']}>
        <Sort />
      </div>
      <div className={styles['count']}>
        <Text type={'strong'}>{ rows } товаров</Text>
      </div>
    </div>
  );
}

export default Filter;
