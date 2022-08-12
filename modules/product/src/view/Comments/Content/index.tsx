
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}

function Comments({ data }: IProps) {

  if ( ! data.length) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item) => (
        <div key={item['uuid']} className={styles['item']}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
