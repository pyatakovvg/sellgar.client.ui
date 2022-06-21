
import React from 'react';

import styles from './default.module.scss';


interface IProps {
  children: any;
}


function DefaultLayout({ children }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        { children }
      </div>
    </div>
  );
}

export default DefaultLayout;
