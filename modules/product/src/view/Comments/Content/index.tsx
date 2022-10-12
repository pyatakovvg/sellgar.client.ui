
import React from 'react';

import Opinion from './Opinion';
import Empty from './Empty';

import styles from './@media/index.module.scss';


interface IProps {
  productUuid: string;
  data: Array<any>;
}

function Comments({ productUuid, data }: IProps) {
  if ( ! data.length) {
    return (
      <Empty />
    );
  }

  return (
    <div className={styles['wrapper']}>
      {data.map((item) => (
        <div key={item['uuid']} className={styles['item']}>
          <Opinion productUuid={productUuid} {...item} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
