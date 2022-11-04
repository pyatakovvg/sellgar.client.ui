
import { Header } from '@library/kit';

import React from 'react';

import Content from './Content';
import AddOpinion from './AddOpinion';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  data: Array<any>;
  meta: any;
}

function Comments({ uuid, data, meta }: IProps): JSX.Element {
  return (
    <div id={'opinion'} className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['title']}>
          <Header level={3}>Отзывы ({ meta['totalRows'] })</Header>
        </div>
      </div>
      <div className={styles['controls']}>
        <AddOpinion productUuid={uuid} />
      </div>
      <div className={styles['content']}>
        <Content productUuid={uuid} data={data} />
      </div>
    </div>
  );
}

export default Comments;
