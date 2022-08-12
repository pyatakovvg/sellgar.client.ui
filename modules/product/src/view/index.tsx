
import { Header } from '@library/kit';

import React from 'react';

import Breadcrumbs from './Bradcrumbs';
import Content from './Content';
import Description from './Description';
import Attributes from './Attributes';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
  comments: any;
}


function Main({ data, comments }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <aside className={styles['breadcrumbs']}>
        <Breadcrumbs data={data} />
      </aside>
      <header className={styles['title']}>
        <Header level={2}>{ data['title'] }</Header>
      </header>
      <section className={styles['content']}>
        <Content data={data} comments={comments} />
      </section>
      { !! data['description'] && (
        <div className={styles['description']}>
          <Description description={data['description']} />
        </div>
      )}
      <div className={styles['attributes']}>
        <Attributes attributes={data['attributes']} />
      </div>
      <div className={styles['comments']}>
        <Comments uuid={data['uuid']} data={comments['data']} meta={comments['meta']} />
      </div>
    </section>
  );
}

export default Main;
