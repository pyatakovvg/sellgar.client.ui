
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Price() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text type={'strong'}>Цена</Text>
      </div>
      <div className={styles['content']}>

      </div>
    </div>
  );
}

export default Price;
