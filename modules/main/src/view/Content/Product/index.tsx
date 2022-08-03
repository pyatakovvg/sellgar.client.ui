
import { addToCart, selectData } from '@widget/bucket';

import React from 'react';
import Link from "next/link";
import getConfig from 'next/config';
import { useDispatch, useSelector } from 'react-redux';

import Image from './Image';
import Common from './Common';
import Controls from './Controls';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  externalId: string;
  gallery: Array<any>;
  title: string;
  originName: string;
  group: any;
  category: any;
  brand: any;
  modes: Array<any>;
}


const config = getConfig();
const process = config['publicRuntimeConfig'];


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


function Product({ externalId, gallery, ...props }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const bucket = useSelector(selectData) as any;
  const [active, setActive] = React.useState(() => props['modes'].find(item => item['isTarget']));

  function handleChange(item: any) {
    setActive(item);
  }

  function handleToBucket() {
    dispatch(addToCart({
      products: updateProducts(bucket?.['products'] ?? [], {
        productUuid: props['uuid'],
        gallery,
        externalId: externalId,
        title: props['title'],
        originName: props['originName'],
        ...active,
      }),
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['image']}>
          <Image
            externalId={externalId}
            srcs={ gallery.map((src) => process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + src['uuid'] + '?size=small')}
          />        </div>
        <div className={styles['common']}>
          <Common item={active} externalId={externalId} {...props} onChange={handleChange} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Controls item={active} {...props} onAddToBucket={handleToBucket} />
        <div className={styles['more']}>
          <Link href={'/catalog/' + props['group']['code'] + '/' + props['category']['code'] + '/' + externalId}>
            <a className={styles['more']}>подробнее...</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
