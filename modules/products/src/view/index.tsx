
import React from 'react';
import { useDispatch } from 'react-redux';

import Filter from './Filter';
import Content from './Content';
import Paging from './Paging';

import { getProductsRequestSuccessAction } from '../index';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
  meta: any;
  env: any;
}


function Main({ data, meta }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsRequestSuccessAction({ data, meta }));
  }, []);

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
          <Paging />
        </div>
      </section>
    </section>
  );
}

export default Main;
