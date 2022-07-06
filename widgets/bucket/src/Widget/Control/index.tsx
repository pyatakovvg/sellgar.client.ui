
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
  const count = React.useMemo(() => bucket ? bucket['products'].reduce((accum: number, item: any) => {
    return accum + item['count'];
  }, 0) : 0, [bucket]);

  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
      </div>
      { !! count && (
        <span className={styles['count']}>{ count }</span>
      )}
    </div>
  );
}

export default Control;
