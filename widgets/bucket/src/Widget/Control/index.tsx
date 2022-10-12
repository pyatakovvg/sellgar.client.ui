
import React from 'react';
import { useSelector } from 'react-redux';

import { selectData } from '../../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onClick(): void;
}


function Control({ onClick }: IProps) {
  const bucket = useSelector(selectData) as any;

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
