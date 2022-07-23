
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Filter({ meta }: any) {
  const rows = meta['totalRows'];

  return (
    <section className={styles['wrapper']}>
      <Text type={'strong'}>Найдено { rows } товаров</Text>
    </section>
  );
}

export default Filter;
