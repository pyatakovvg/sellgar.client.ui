
import React from 'react';
import { useDispatch } from 'react-redux';

import Filter from './Filter';
import Content from './Content';

import { getProductsRequestSuccessAction } from '../index';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
  meta: any;
  env: any;
}


function Main({ data, meta, env }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(()  => {
    window['env'] = env;
  }, [env]);

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

        </div>
      </section>
    </section>
  );
}

export default Main;
