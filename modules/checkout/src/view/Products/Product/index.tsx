
import numeral from '@package/numeral';
import { Text, Image } from '@library/kit';

import React from 'react';
import getConfig from 'next/config';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product({ count, price, fullPrice, currency, product }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Image width={64} height={64} src={product.image ? process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + product['image']['uuid'] : undefined} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <div className={styles['link']}>
            <Text type={'strong'}>{ product['name'] }</Text>
          </div>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>#{ product['vendor'] }</Text>
        </div>
      </div>
      <div className={styles['price']}>
        <div className={styles['line']}>
          <Text type={'description'}>{ count } x { numeral(price).format() } { currency['displayName'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'strong'}>= { numeral(fullPrice).format() } { currency['displayName'] }</Text>
        </div>
      </div>
    </div>
  );
}

export default Product;
