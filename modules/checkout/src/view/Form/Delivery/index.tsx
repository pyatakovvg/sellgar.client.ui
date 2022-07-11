
import { Header, RadioField, Radio } from '@library/kit';

import React from 'react';

import Item from './Item';

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
        <div className={styles['controls']}>
          <RadioField name={'deliveryCode'}>
            {data.map((item) => (
              <div key={item['code']} className={styles['item']}>
                <Radio type={'empty'} value={item['code']}>
                  <Item>{ item['displayName'] }</Item>
                </Radio>
              </div>
            ))}
          </RadioField>
        </div>
        <div className={styles['description']}>

        </div>
      </div>
    </div>
  );
}

export default Delivery;
