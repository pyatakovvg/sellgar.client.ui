
import numeral from '@package/numeral';
import { Header, Text, Count, Image } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { useDispatch, useSelector } from 'react-redux';

import { updateCart } from '../../../../store/commands';
import { selectData, selectInProcess } from '../../../../store/slice';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product({ externalId, productUuid, groupCode, categoryCode, modeUuid, title, value, vendor, price, currency, count, imageUuid }: any) {
  const dispatch = useDispatch();
  const checkout = useSelector(selectData) as any;
  const inProcess = useSelector(selectInProcess) as boolean;

  function handleChange(value: number) {
    dispatch(updateCart({
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

  function handleRemove() {
    dispatch(updateCart({
      products: checkout['products'].filter((item: any) => {
        return ! (item['productUuid'] === productUuid && item['modeUuid'] === modeUuid);
      }),
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Image width={124} height={124} src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + imageUuid + '?size=124x124'} />
      </div>
      <div className={styles['common']}>
        <div className={styles['line']}>
          <Link href={'/catalog/' + groupCode + '/' + categoryCode + '/' + externalId}>
            <a>
              <Header level={4}>{ title }</Header>
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
        <div className={styles['counter']}>
          <Count value={count} minValue={1} maxValue={10} onChange={handleChange} disabled={inProcess} />
        </div>
        <div className={styles['destroy']}>
          <span className={styles['remove']} onClick={handleRemove}>Удалить</span>
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

export default React.memo(Product);
