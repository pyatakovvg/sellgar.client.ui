
import { Header, Text, Image } from '@library/kit';

import React from 'react';
import getConfig from 'next/config';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  name: string;
  brand: any;
  vendor: string;
}


function Product({ name, brand, vendor }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['code']}>
        <Text type={'description'}>#{ vendor }</Text>
      </div>
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Header level={3}>{ name }</Header>
        </div>
        {brand['image'] && (
          <div className={styles['image']}>
            <Image
              src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + brand['image']['uuid']}
              width={64}
              height={64}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
