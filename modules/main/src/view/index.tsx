
import { Filter } from '@library/design';

import React from 'react';

import Menu from './Menu';
import Content from './Content';
import Paging from './Paging';

import styles from './@media/index.module.scss';


interface IProps {
  groups: Array<any>;
  data: Array<any>;
  meta: any;
}


function Main({ groups, data, meta }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <aside className={styles['aside']}>
        <Menu groups={groups} />
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

export default Main;
