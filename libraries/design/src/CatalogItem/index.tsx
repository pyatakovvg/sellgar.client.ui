
import { Text, Image } from '@library/kit';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import getConfig from 'next/config';

import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  imageUuid: string;
  productsCount: number;
}

const config = getConfig();
const process = config['publicRuntimeConfig'];


function CatalogItem({ name, imageUuid, productsCount }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']}>
        <Image src={process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + imageUuid + '?size=160x160'} width={160} height={160} />
      </div>
      <div className={styles['content']}>
        <div className={styles['text']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
        <div className={styles['description']}>
          <Text type={'description'}>{ productsCount } { nounDeclension(productsCount, ['товар', 'товара', 'товаров']) }</Text>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
