
import numeral from '@package/numeral';
import { Text, Image, Count } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { selectData } from '../../../../store/slice';
import { changeOpen, addToCart } from '../../../../store/commands';

import styles from './@media/index.module.scss';


function Product({ externalId, productUuid, modeUuid, title, value, vendor, price, currency, count, imageUuid }: any) {
  const dispatch = useDispatch();
  const checkout = useSelector(selectData) as any;

  function handleClose() {
    dispatch(changeOpen(false));
  }

  function handleChange(value: number) {
    dispatch(addToCart({
      products: checkout['products'].map((item: any) => {
        if (item['productUuid'] === productUuid && item['modeUuid'] === modeUuid) {
          return {
            ...item,
            count: value,
          };
        }
        return item;
      }),
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Image src={window.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + imageUuid + '?size=small'} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <Link href={'/products/' + externalId}>
            <a onClick={handleClose}>
              <Text type={'strong'}>{ title }</Text>
            </a>
          </Link>
        </div>
        <div className={styles['line']}>
          <Text>{ value }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>{ vendor }</Text>
        </div>
      </div>
      <div className={styles['controls']}>
        <Count value={count} onChange={handleChange} minValue={1} maxValue={10} />
      </div>
      <div className={styles['price']}>
        <div className={styles['line']}>
          <Text type={'description'}>{ count } x { numeral(price).format() } { currency['displayName'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'strong'}>= { numeral(price * count).format() } { currency['displayName'] }</Text>
        </div>
      </div>
    </div>
  );
}

export default Product;
