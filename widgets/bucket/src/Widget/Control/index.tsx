
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onClick(): void;
}


function Control({ onClick }: IProps) {
  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
      </div>
    </div>
  );
}

export default Control;
