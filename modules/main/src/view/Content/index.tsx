
import React from 'react';

import Product from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  console.log(data)
  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        {data.map((product) => (
          <div key={product['uuid']} className={styles['item']}>
            <Product key={product['uuid']} {...product} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Content;
