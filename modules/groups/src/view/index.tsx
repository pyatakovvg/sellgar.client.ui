
import { Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';
import Breadcrumbs from './Breadcrumbs';

import { getGroupsRequestSuccessAction } from '../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
  meta: any;
  env: any;
}


function Groups({ data, meta }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGroupsRequestSuccessAction({ data, meta }));
  }, []);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs data={data} />
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
