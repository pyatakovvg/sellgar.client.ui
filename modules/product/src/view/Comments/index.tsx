
import { Header } from '@library/kit';

import React from 'react';

import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
  meta: any;
}

function Comments({ data, meta }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Комментарии</Header>
      </div>
      <div className={styles['content']}>
        <Content data={data} />
      </div>
      <div className={styles['controls']}>

      </div>
    </section>
  );
}

export default Comments;
