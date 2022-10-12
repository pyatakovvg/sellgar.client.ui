
import { Header } from '@library/kit';
import { Breadcrumbs } from '@library/design';

import React from 'react';

import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Groups({ data }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs data={[
          { name: 'Каталог' }
        ]} />
      </div>
      <div className={styles['header']}>
        <Header level={2}>Каталог товаров</Header>
      </div>
      <section className={styles['content']}>
        <Content data={data} />
      </section>
    </section>
  );
}

export default Groups;
