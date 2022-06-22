
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

import Image from './Image';
import Modes from './Modes';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  externalId: string;
  gallery: Array<any>;
  title: string;
  brand: any;
  modes: Array<any>;
}


function Product({ externalId, gallery, title, brand, modes }: IProps): JSX.Element {
  return (
    <Link href={'/products/' + externalId}>
      <a className={styles['wrapper']}>
        <div className={styles['brand']}>
          <Text type={'description'}>{ brand?.['name'] ?? '---' }</Text>
        </div>
        <div className={styles['image']}>
          <Image src={ !! gallery.length ? process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + gallery[0]['uuid'] + '?size=small' : null} />
        </div>
        <div className={styles['content']}>
          <Text>{ title || '---' }</Text>
        </div>
        <div className={styles['modes']}>
          <Modes modes={modes} />
        </div>
      </a>
    </Link>
  );
}

export default Product;
