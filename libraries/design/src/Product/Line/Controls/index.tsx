
import numeral from '@package/numeral';
import { Button, Text, Image } from '@library/kit';
// import { addToBucket, selectData } from '@widget/bucket';

import React from 'react';
import getConfig from "next/config";
// import { useDispatch } from 'react-redux';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  uuid: string;
  products: Array<any>;
}


function Controls({ products }: IProps) {
  // const dispatch = useDispatch();

  const product = products.find((item) => item['isTarget']);

  // const bucket = useSelector(selectData) as any;
  // const product =  bucket ? bucket['products'].filter((item: any) => item['product']['uuid'] === uuid)[0] : null;

  function handleAddToCart() {
    // dispatch(addToBucket({
    //   productUuid: uuid,
    //   uuid: product?.['uuid'] ?? null,
    //   count: (product?.['count'] ?? 0) + 1,
    // }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['price']}>
          <Text className={styles['amount']}>{ `${numeral(product['product']['price']).format() } ${ product['product']['currency']['displayName'] }` }</Text>
        </div>
        <div className={styles['controls']}>
          <Button mode={'info'} size={'middle'} onClick={handleAddToCart}>В корзину</Button>
        </div>
        {/*{ !! product && (*/}
        {/*  <div className={styles['bucket']}>*/}
        {/*    <Text type={'description'}>уже { product['count'] } в корзине</Text>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      <div className={styles['brand']}>
        <Image width={40} height={40} src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + product['product']['brand']['image']['uuid']} />
      </div>
    </div>
  );
}

export default Controls;
