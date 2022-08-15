
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <Text type={'strong'}>Еще никто не написал отзыв</Text>
    </div>
  );
}

export default Empty;
