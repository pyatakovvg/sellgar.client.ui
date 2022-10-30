
import React from 'react';
import getConfig from 'next/config';

import Gallery from './Gallery';
import Common from './Common';
import Controls from './Controls';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  externalId: string;
  images: Array<any>;
  name: string;
  group: any;
  category: any;
  product: any;
}


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product(props: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['gallery']}>
          <Gallery items={ props['images'].map((src: any) => process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + src['uuid']) } />
        </div>
        <div className={styles['content']}>
          <Common {...props} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Controls {...props} />
      </div>
    </div>
  );
}

export default Product;
