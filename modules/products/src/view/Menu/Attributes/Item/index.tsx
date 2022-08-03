
import React from 'react';

import Values from './Values';

import styles from './@media/index.module.scss';


function Attribute({ values, name }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['link']}>
        <span className={styles['content']}>{ name }</span>
      </div>
      <div className={styles['values']}>
        <Values items={values} />
      </div>
    </div>
  );
}

export default Attribute;
