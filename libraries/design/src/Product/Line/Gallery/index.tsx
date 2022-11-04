
import { Gallery } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  items: Array<any>;
}


function Image({ items }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <Gallery items={items} />
    </div>
  );
}

export default React.memo(Image);
