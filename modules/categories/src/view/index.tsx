
import { Header } from '@library/kit';
import { Breadcrumbs } from '@library/design';

import React from 'react';

import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Categories({ data }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs data={[
          { href: '/catalog', name: 'Каталог' },
          { name: data['name'] },
        ]} />
      </div>
      <div className={styles['header']}>
        <Header level={2}>{ data['name'] }</Header>
      </div>
      <section className={styles['content']}>
        <Content data={data} />
      </section>
    </section>
  );
}

export default Categories;
