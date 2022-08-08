
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Filter({ meta }: any) {
  const rows = meta['totalRows'];

  return (
    <div className={styles['wrapper']}>
      <Text type={'strong'}>Всего { rows } товаров</Text>
    </div>
  );
}

export default Filter;
