
import React from 'react';
import { useDispatch } from 'react-redux';

import Menu from './Menu';
import Filter from './Filter';
import Content from './Content';
import Paging from './Paging';

import { getProductsRequestSuccessAction } from '../index';

import styles from './@media/index.module.scss';


interface IProps {
  brands: Array<any>;
  data: Array<any>;
  meta: any;
  env: any;
}


function Products({ brands, data, meta }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsRequestSuccessAction({ data, meta }));
  }, [data]);

  return (
    <section className={styles['wrapper']}>
      <aside className={styles['aside']}>
        <Menu brands={brands} />
      </aside>
      <section className={styles['content']}>
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
    </section>
  );
}

export default Products;
