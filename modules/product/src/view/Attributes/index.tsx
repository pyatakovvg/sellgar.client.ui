
import {Header, Text} from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  attributes: Array<any>;
}

function Attributes({ attributes }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Характеристика</Header>
      </div>
      <div className={styles['content']}>
        { ! attributes.length && (
          <Text type={'strong'}>У товара нет характеристик</Text>
        )}
        {attributes.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Attributes;
