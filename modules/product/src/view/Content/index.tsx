
import { Gallery } from '@library/kit';

import React from 'react';
import getConfig from 'next/config';

import Image from './Image';
import Product from './Product';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


interface IProps {
  data: any;
  comments: any;
}


function Content({ data, comments }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Gallery type={'large'} width={500} height={500} items={ data['images'].map((src: any) => process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + src['uuid']) } />
        {/*<Image srcs={ data['images'].map((src: any) => process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + src['uuid']) } />*/}
      </div>
      <div className={styles['content']}>
        <Product {...data} comments={comments} />
      </div>
    </section>
  );
}

export default Content;
