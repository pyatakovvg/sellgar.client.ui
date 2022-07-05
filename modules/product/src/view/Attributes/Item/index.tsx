
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  value: string;
  unit: string | null;
}

function Attribute({ name, value, unit }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <Text type={'strong'}>{ name }</Text>
      </div>
      <div className={styles['value']}>
        <Text>{ value } { unit }</Text>
      </div>
    </section>
  );
}

export default Attribute;
