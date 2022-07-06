
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import Img from './Img';

// import cn from 'classnames';
import styles from './@media/index.module.scss';


function Product({ title, value, vendor, price, currency, count, imageUuid }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Img src={ !! imageUuid ? window.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + imageUuid + '?size=small' : null} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <Text type={'strong'}>{ title }</Text>
        </div>
        <div className={styles['line']}>
          <Text>{ value }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>{ vendor }</Text>
        </div>
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
