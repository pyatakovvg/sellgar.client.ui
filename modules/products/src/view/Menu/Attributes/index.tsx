
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Attributes({ attributes }: any) {
  return (
    <div className={styles['wrapper']}>
      {attributes.map((item: any) => {
        return (
          <div key={item['uuid']} className={styles['item']}>
            <Item {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default Attributes;
