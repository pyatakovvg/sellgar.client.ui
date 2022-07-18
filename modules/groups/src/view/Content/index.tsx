
import React from 'react';

import Group from './Group';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      {data.map((group) => (
        <div key={group['code']} className={styles['item']}>
          <Group {...group} />
        </div>
      ))}
    </section>
  );
}

export default Content;
