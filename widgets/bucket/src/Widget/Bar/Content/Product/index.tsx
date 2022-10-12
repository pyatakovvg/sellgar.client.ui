
import numeral from '@package/numeral';
import { Text, Image, Count } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { useDispatch } from 'react-redux';

import { changeOpen, addToBucket } from '../../../../store/commands';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product({ uuid, count, fullPrice, product }: any) {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(changeOpen(false));
  }

  function handleChange(value: number) {
    dispatch(addToBucket({
      uuid,
      count: value,
      productUuid: product['uuid'],
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Image width={96} height={96} src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + product['image']['uuid'] + '?width=96'} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <Link href={'/catalog/' + product['groupCode'] + '/' + product['categoryCode'] + '/' + product['externalId']}>
            <a className={styles['link']} onClick={handleClose}>
              <Text type={'strong'}>{ product['title'] }</Text>
            </a>
          </Link>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>#{ product['externalId'] }</Text>
        </div>
      </div>
      <div className={styles['controls']}>
        <Count value={count} onChange={handleChange} minValue={1} />
      </div>
      <div className={styles['price']}>
        <div className={styles['line']}>
          <Text type={'description'}>{ count } x { numeral(product['price']).format() } { product['currency']['displayName'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'strong'}>= { numeral(fullPrice).format() } { product['currency']['displayName'] }</Text>
        </div>
      </div>
    </div>
  );
}

export default Product;
