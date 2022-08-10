
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


function Attributes({ attributes }: any) {
  return (
    <div className={styles['wrapper']}>
      {attributes.map((item: any) => {
        console.log(item)
        return (
          <div key={item['code']} className={styles['item']}>
            <Item {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default Attributes;
