
import { Count } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  count: number;
  onDelete(): void;
  onChange(count: number): void;
}


function Bucket({ count, onDelete, onChange }: IProps) {
  const removeClassName = React.useMemo(() => cn(styles['remove'], 'fa-solid fa-xmark'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Count minValue={1} value={count} onChange={onChange} />
      </div>
      <div className={styles['icon']}>
        <span className={removeClassName} onClick={() => onDelete()} />
      </div>
    </div>
  );
}

export default Bucket;
