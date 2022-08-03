
import React from 'react';

import Product from './Product';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {data.map((product) => (
        <div key={product['uuid']} className={styles['item']}>
          <Product key={product['uuid']} {...product} />
        </div>
      ))}
    </div>
  );
}

export default Content;
