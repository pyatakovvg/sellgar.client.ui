
import React from 'react';
import { useSelector } from 'react-redux';

import { useBucketData, useBucketInUpdateProcess, selectInDeleteProcess } from '../../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onClick(): void;
}


function Control({ onClick }: IProps) {
  const bucket = useBucketData;
  const inUpdateProcess = useBucketInUpdateProcess();
  const inDeleteProcess = useSelector(selectInDeleteProcess);

  const isProcess = (inDeleteProcess || !! inUpdateProcess.length);

  if (isProcess) {
    return (
      <div className={styles['wrapper']}>
        <span className={cn(styles['icon'], styles['spine'], 'fa-solid fa-circle-notch')} />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
      </div>
      { !! bucket?.['count'] && (
        <span className={styles['count']}>{ bucket['count'] }</span>
      )}
    </div>
  );
}

export default Control;
