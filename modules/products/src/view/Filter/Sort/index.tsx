
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Sort() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['label']}>
        <Text type={'description'}>Сортировка:</Text>
      </div>
      <div className={styles['control']}>

      </div>
    </div>
  );
}

export default Sort;
