
import numeral from '@package/numeral';

import React from 'react';

import Point from './Point';

import styles from './default.module.scss';


interface IProps {
  value: number;
}


function Small({ value }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Point value={value} index={1} />
        <Point value={value} index={2} />
        <Point value={value} index={3} />
        <Point value={value} index={4} />
        <Point value={value} index={5} />
      </div>
      <div className={styles['value']}>
        <p className={styles['text']}>{ numeral(value).format('0.0') }</p>
      </div>
    </div>
  );
}

export default React.memo(Small);
