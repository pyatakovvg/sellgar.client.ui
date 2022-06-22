
import React from 'react';

import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Main({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <Content data={data} />
      </section>
    </section>
  );
}

export default Main;
