
import { Button } from '@library/kit';

import React from 'react';

// import cn from 'classnames';
import styles from './@media/index.module.scss';


function Content({ onCheckout }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>

      </div>
      <div className={styles['controls']}>
        <Button onClick={onCheckout}>Оформить</Button>
      </div>
    </div>
  );
}

export default Content;
