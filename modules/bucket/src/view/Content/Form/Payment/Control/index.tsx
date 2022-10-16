
import { RadioField, Radio } from '@library/kit';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Delivery({ data }: IProps) {

  return (
    <div className={styles['wrapper']}>
      <RadioField name={'paymentCode'}>
        {data.map((item) => (
          <div key={item['code']} className={styles['item']}>
            <Radio type={'empty'} value={item['code']}>
              <Item {...item} />
            </Radio>
          </div>
        ))}
      </RadioField>
    </div>
  );
}

export default Delivery;
