
import { Header } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  values: Array<any>;
}

function Attribute({ name, values }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>{ name }</Header>
      </div>
      <div className={styles['content']}>
        {values.map((item) => {
          return (
            <Item key={item['uuid']} {...item} />
          );
        })}
      </div>
    </section>
  );
}

export default Attribute;
