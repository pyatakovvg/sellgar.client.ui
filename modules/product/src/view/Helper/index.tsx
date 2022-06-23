
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Helper({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <Text>{ data?.['group']?.['name'] }</Text>/
      <Text>{ data?.['category']?.['name'] }</Text>/
      <Text>{ data?.['brand']?.['name'] }</Text>/
      <Text>{ data?.['title'] }</Text>
    </section>
  );
}

export default Helper;
