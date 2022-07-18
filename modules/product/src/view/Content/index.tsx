
import { Gallery } from '@library/kit';
import { addToCart, selectData } from '@widget/bucket';

import React from 'react';
import getConfig from 'next/config';
import {useDispatch, useSelector} from 'react-redux';

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

function updateProducts(before: Array<any>, product: any) {
  const current = [...before];
  const hasProduct = current.some((item) => item['productUuid'] === product['productUuid'] && item['modeUuid'] === product['uuid']);
  if ( ! hasProduct) {
    current.push({
      productUuid: product['productUuid'],
      imageUuid: product?.['gallery']?.[0]?.['uuid'] ?? null,
      modeUuid: product['uuid'],
      externalId: product['externalId'],
      title: product['title'],
      originName: product['originName'] || null,
      vendor: product['vendor'],
      value: product['value'],
      count: 1,
      price: product['price'],
      currencyCode: product['currency']['code'],
    });
  }
  else {
    return current.map((item) => {
      if (item['productUuid'] === product['productUuid'] && item['modeUuid'] === product['uuid']) {
        return {
          ...item,
          count: item['count'] + 1,
        };
      }
      return item;
    });
  }
  return current;
}


function Content({ data }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const bucket = useSelector(selectData) as any;
  const src = useGallerySrc(data?.['gallery'] ?? []);

  function handleToBucket(item: any) {
    dispatch(addToCart({
      products: updateProducts(bucket?.['products'] ?? [], {
        productUuid: data['uuid'],
        gallery: data['gallery'],
        externalId: data['externalId'],
        title: data['title'],
        originName: data['originName'],
        ...item,
      }),
    }));
  }

  return (
    <section className={styles['wrapper']}>
      <div className={styles['gallery']}>
        <Gallery src={src} />
      </div>
      <div className={styles['content']}>
        <Product {...data} onToCart={handleToBucket} />
      </div>
    </section>
  );
}

export default Content;
