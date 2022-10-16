
import { Header } from '@library/kit';

import React from 'react';

import Control from './Control';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Delivery({ data }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Способ получения</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['controls']}>
          <Control data={data} />
        </div>
        <div className={styles['details']}>

        </div>
      </div>
    </div>
  );
}

export default Delivery;
