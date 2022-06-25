
import React from 'react';
import getConfig from 'next/config';

import Image from './Image';
import Common from './Common';
import Controls from './Controls';

import styles from './@media/index.module.scss';


interface IProps {
  externalId: string;
  gallery: Array<any>;
  title: string;
  category: any;
  brand: any;
  modes: Array<any>;
}


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Product({ externalId, gallery, ...props }: IProps): JSX.Element {
  const [active, setActive] = React.useState(() => props['modes'].find(item => item['isTarget']));

  function handleChange(item: any) {
    setActive(item);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['image']}>
          <Image externalId={externalId} src={ !! gallery.length ? process.env['GATEWAY_SERVICE_API'] + '/api/v1/images/' + gallery[0]['uuid'] + '?size=small' : null} />
        </div>
        <div className={styles['common']}>
          <Common item={active} externalId={externalId} {...props} onChange={handleChange} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Controls item={active} {...props} />
      </div>
    </div>
  );
}

export default Product;
