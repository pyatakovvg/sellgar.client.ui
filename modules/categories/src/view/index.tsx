
import { Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';

import { getCategoriesRequestSuccessAction } from '../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  group: any;
  data: Array<any>;
  meta: any;
  env: any;
}


function Categories({ group, data, meta }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategoriesRequestSuccessAction({ data, meta }));
  }, []);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={2}>{ group['name'] }</Header>
      </div>
      <section className={styles['content']}>
        <Content data={data} />
      </section>
    </section>
  );
}

export default Categories;
