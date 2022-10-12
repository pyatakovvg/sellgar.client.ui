
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  value: string;
  attribute: any;
}

function Attribute({ value, attribute }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <Text type={'strong'}>{ attribute['name'] }</Text>
      </div>
      <div className={styles['value']}>
        <Text>{ value } { attribute?.['unit']?.['name'] ?? null }</Text>
      </div>
    </section>
  );
}

export default Attribute;
