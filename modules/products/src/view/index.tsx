
import { Header } from '@library/kit';
import { Filter, Paging, Breadcrumbs } from '@library/design';

import React from 'react';

import Menu from './Menu';
import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  category: any;
  brands: Array<any>;
  attributes: Array<any>;
  data: Array<any>;
  meta: any;
}


function Products({ category, brands, attributes, data, meta }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs data={[
          { href: '/catalog', name: 'Каталог' },
          { href: '/catalog/' + category['group']['code'], name: category['group']['name'] },
          { name: category['name'] },
        ]} />
      </div>
      <div className={styles['header']}>
        <Header level={2}>{ category['name'] } ({ meta['totalRows'] })</Header>
      </div>
      <div className={styles['content']}>
        <aside className={styles['aside']}>
          <Menu brands={brands} attributes={attributes} />
        </aside>
        <section className={styles['container']}>
          <div className={styles['filter']}>
            <Filter meta={meta} />
          </div>
          <div className={styles['list']}>
            <Content data={data} />
          </div>
          <div className={styles['paging']}>
            <Paging meta={meta} />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Products;
