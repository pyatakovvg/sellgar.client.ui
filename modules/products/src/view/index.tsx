
import { Header } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';

import Breadcrumbs from './Breadcrumbs';
import Menu from './Menu';
import Filter from './Filter';
import Content from './Content';
import Paging from './Paging';

import { getProductsRequestSuccessAction } from '../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  category: any;
  brands: Array<any>;
  attributes: Array<any>;
  data: Array<any>;
  meta: any;
  env: any;
}


function Products({ category, brands, attributes, data, meta }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsRequestSuccessAction({ data, meta }));
  }, [data]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs data={category} />
      </div>
      <div className={styles['header']}>
        <Header level={2}>{ category['name'] } { meta['totalRows'] } { nounDeclension(meta['totalRows'], ['товар', 'товара', 'товаров']) }</Header>
      </div>
      <div className={styles['content']}>
        <aside className={styles['aside']}>
          <Menu brands={brands} attributes={attributes} />
        </aside>
        <section className={styles['container']}>
          <div className={styles['filter']}>
            <Filter category={category} />
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
