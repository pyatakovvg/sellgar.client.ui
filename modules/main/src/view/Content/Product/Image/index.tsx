
import { Text } from '@library/kit';

import React from 'react';

import Img from './Img';

import styles from './@media/index.module.scss';


interface IProps {
  src: string | null;
  externalId: string;
}


function Image({ src, externalId }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Img src={src} />
      </div>
      <div className={styles['description']}>
        <Text type={'description'}>#{ externalId }</Text>
      </div>
    </div>
  );
}

export default Image;
