
import { Gallery } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  items: Array<any>;
}


function Image({ items }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Gallery width={160} height={160} items={items} />
      </div>
    </div>
  );
}

export default React.memo(Image);
