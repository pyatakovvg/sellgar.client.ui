
import { Product } from '@library/design';

import React from 'react';

// import Product from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      {data.map((product) => (
        <div key={product['uuid']} className={styles['item']}>
          <Product key={product['uuid']} {...product} />
        </div>
      ))}
    </section>
  );
}

export default Content;
