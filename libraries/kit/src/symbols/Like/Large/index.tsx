
import numeral from '@package/numeral';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  value: number;
}


function Large({ value }: IProps) {
  const upClassName = React.useMemo(() => cn(styles['icon'], styles['success'], 'fa-solid fa-thumbs-up'), []);
  const downClassName = React.useMemo(() => cn(styles['icon'], styles['danger'], 'fa-solid fa-thumbs-down'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={downClassName} />
      <div className={styles['value']}>
        <p className={styles['text']}>{ numeral(value).format('0') }</p>
        <span className={styles['delimiter']} />
        <p className={styles['text']}>{ numeral(value).format('0') }</p>
      </div>
      <span className={upClassName} />
    </div>
  );
}

export default React.memo(Large);
