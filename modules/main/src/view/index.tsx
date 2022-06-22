
import React from 'react';

import Filter from './Filter';
import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Main({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <aside className={styles['aside']}>
        <Filter />
      </aside>
      <section className={styles['content']}>
        <div className={styles['filter']}>

        </div>
        <div className={styles['list']}>
          <Content data={data} />
        </div>
        <div className={styles['paging']}>

        </div>
      </section>
    </section>
  );
}

export default Main;
