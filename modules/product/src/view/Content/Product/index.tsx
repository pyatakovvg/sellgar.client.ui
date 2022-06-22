
import { Text } from '@library/kit';

import React from 'react';
import getConfig from 'next/config';

import Image from './Image';
import Modes from './Modes';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  uuid: string;
  gallery: Array<any>;
  title: string;
  brand: any;
  modes: Array<any>;
}


function Product({ gallery, title, brand, modes }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['brand']}>
        <Text type={'description'}>{ brand?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['image']}>
        <Image src={ !! gallery.length ? process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + gallery[0]['uuid'] + '?size=middle' : null} />
      </div>
      <div className={styles['content']}>
        <Text>{ title || '---' }</Text>
      </div>
      <div className={styles['modes']}>
        <Modes modes={modes} />
      </div>
    </div>
  );
}

export default Product;
