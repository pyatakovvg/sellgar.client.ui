
import React from 'react';

import Category from './Category';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      {data.map((category) => (
        <div key={category['code']} className={styles['item']}>
          <Category {...category} />
        </div>
      ))}
    </section>
  );
}

export default Content;
