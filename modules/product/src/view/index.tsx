
import { Header } from '@library/kit';
import { Breadcrumbs } from '@library/design';

import React from 'react';

import Content from './Content';
import Description from './Description';
import Attributes from './Attributes';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
  comments: any;
}


function Product({ data, comments }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <aside className={styles['breadcrumbs']}>
        <Breadcrumbs data={[
          { href: '/catalog', name: 'Каталог' },
          { href: '/catalog/' + data['group']['code'], name: data['group']['name'] },
          { href: '/catalog/' + data['group']['code'] + '/' + data['category']['code'], name: data['category']['name'] },
          { name: data['name'] },
        ]} />
      </aside>
      <header className={styles['title']}>
        <Header level={2}>{ data['name'] }</Header>
      </header>
      <section className={styles['content']}>
        <Content data={data} comments={comments} />
      </section>
      { !! data['attributes'].length && (
        <div className={styles['attributes']}>
          <Attributes attributes={data['attributes']} />
        </div>
      )}
      { !! data['description'] && (
        <div className={styles['description']}>
          <Description description={data['description']} />
        </div>
      )}
      <div className={styles['comments']}>
        <Comments uuid={data['uuid']} {...comments} />
      </div>
    </section>
  );
}

export default Product;
