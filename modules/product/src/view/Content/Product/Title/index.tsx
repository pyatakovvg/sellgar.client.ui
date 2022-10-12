
import { Header } from '@library/kit';

import React from 'react';
import Image from 'next/image';
import getConfig from 'next/config';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  title: string;
  brand: any;
}


function Product({ title, brand }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={3}>{ title }</Header>
      </div>
      {brand['image'] && (
        <div className={styles['image']}>
          <Image
            alt={''}
            src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + brand['image']['uuid'] + '?width=64'}
            layout="fixed"
            width={64}
            height={64}
            objectFit={'scale-down'}
            loading={'lazy'}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
