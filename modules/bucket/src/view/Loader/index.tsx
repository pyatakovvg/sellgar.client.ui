
import { Header, Spinner } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Loader() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['spinner']}>
          <Spinner />
        </div>
        <div className={styles['title']}>
          <Header level={4}>Немного терпения</Header>
        </div>
      </div>
    </div>
  );
}

export default Loader;
