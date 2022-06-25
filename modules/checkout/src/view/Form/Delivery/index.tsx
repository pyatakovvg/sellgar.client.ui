
import { Header, Button } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Delivery({ data }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Способ получения</Header>
      </div>
      <div className={styles['content']}>
        {data.map((item) => (
          <Button key={item['code']}>{ item['displayName'] }</Button>
        ))}
      </div>
    </div>
  );
}

export default Delivery;
