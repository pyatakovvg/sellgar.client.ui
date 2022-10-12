
import { Count } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  count: number;
  onChange(count: number): void;
}


function Bucket({ count, onChange }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Count minValue={1} value={count} onChange={onChange} />
      </div>
    </div>
  );
}

export default Bucket;
