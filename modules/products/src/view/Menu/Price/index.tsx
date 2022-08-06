
import { Text, Input } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Price() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text type={'strong'}>Цена</Text>
      </div>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <Input value={'0'} disabled />
        </div>
        <span className={styles['delimiter']}>-</span>
        <div className={styles['field']}>
          <Input value={'999999'} disabled />
        </div>
      </div>
    </div>
  );
}

export default Price;
