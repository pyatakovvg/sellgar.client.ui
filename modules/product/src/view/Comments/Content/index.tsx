
import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}

function Comments({ data }: IProps) {

  if ( ! data.length) {
    return null;
  }

  return (
    <section className={styles['wrapper']}>
      {data.map((item) => (
        <div key={item['uuid']}>kjhkhkj</div>
      ))}
    </section>
  );
}

export default Comments;
