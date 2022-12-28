
import numeral from '@package/numeral';
import { Text, Image } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

import { changeOpen } from '../../../../store/commands';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product(product: any) {
  function handleClose() {
    changeOpen(false);
  }

  return (
    <Link
      className={styles['link']}
      onClick={handleClose}
      href={'/catalog/' + product['group']['code'] + '/' + product['category']['code'] + '/' + product['externalId']}
    >
      <div className={styles['wrapper']}>
        <div className={styles['gallery']}>
          { !! product['images'].length && (
            <Image width={48} height={48} src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + product['images'][0]['uuid']} />
          )}
        </div>
        <div className={styles['common']}>
          <div className={styles['line']}>
            <Text>{ product['name'] }</Text>
          </div>
          <div className={styles['line']}>
            <Text type={'description'}>#{ product['product']['vendor'] }</Text>
          </div>
        </div>
        <div className={styles['price']}>
          <Text type={'strong'}>{ numeral(product['product']['price']).format() } { product['product']['currency']['displayName'] }</Text>
        </div>
      </div>
    </Link>
  );
}

export default Product;
