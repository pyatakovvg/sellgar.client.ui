
import {Header, Text} from '@library/kit';

import React from 'react';

import Group from './Group';

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
        {attributes.map((item) => (
          <Group key={item['uuid']} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Attributes;
