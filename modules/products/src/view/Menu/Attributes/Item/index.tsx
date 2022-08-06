
import React from 'react';

import Values from './Values';

import styles from './@media/index.module.scss';


function Attribute({ values, name, code }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['link']}>
        <span className={styles['content']}>{ name }</span>
      </div>
      <div className={styles['values']}>
        <Values code={code} items={values} />
      </div>
    </div>
  );
}

export default Attribute;
