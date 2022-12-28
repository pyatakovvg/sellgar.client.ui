
import numeral from '@package/numeral';
import { Text, Image, Count } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { useDispatch } from 'react-redux';

import { changeOpen, addToBucket, cleanBucket } from '../../../../store/commands';

import styles from './@media/index.module.scss';
import cn from "classnames";


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product({ bucketUuid, count, fullPrice, product }: any) {
  const removeClassName = React.useMemo(() => cn(styles['remove'], 'fa-solid fa-xmark'), []);

  function handleClose() {
    changeOpen(false);
  }

  async function handleDelete() {
    await cleanBucket({
      bucketUuid,
      productUuid: product['uuid'],
    });
  }

  async function handleChange(value: number) {
    await addToBucket({
      bucketUuid,
      count: value,
      productUuid: product['uuid'],
    });
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Image width={96} height={96} src={product['image'] ? process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + product['image']['uuid'] : undefined} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <Link className={styles['link']} onClick={handleClose} href={'/catalog/' + product['groupCode'] + '/' + product['categoryCode'] + '/' + product['externalId']}>
            <Text type={'strong'}>{ product['name'] }</Text>
          </Link>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>#{ product['vendor'] }</Text>
        </div>
      </div>
      <div className={styles['controls']}>
        <div className={styles['count']}>
          <Count value={count} onChange={handleChange} minValue={1} />
        </div>
        <div className={styles['icon']}>
          <span className={removeClassName} onClick={handleDelete} />
        </div>
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
