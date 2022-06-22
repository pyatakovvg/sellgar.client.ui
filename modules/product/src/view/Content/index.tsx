
import React from 'react';

import Product from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <Product {...data} />
    </section>
  );
}

export default Content;
