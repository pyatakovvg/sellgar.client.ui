
import { Gallery } from '@library/kit';

import React from 'react';
import getConfig from 'next/config';

import Product from './Product';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];

interface IProps {
  data: any;
}


function useGallerySrc(data: Array<any>) {
  const [src, setSrc] = React.useState<Array<string>>([]);
  React.useEffect(() => {
    const map = data.map((item) => {
      return process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + item['uuid'] + '?size=middle'
    });
    setSrc(map);
  }, [data]);
  return src;
}

function Content({ data }: IProps): JSX.Element {
  const src = useGallerySrc(data?.['gallery'] ?? []);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Gallery src={src} />
      </div>
      <div className={styles['content']}>
        <Product {...data} />
      </div>
    </section>
  );
}

export default Content;
