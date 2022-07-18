
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


interface IProps {
  code: string;
  name: string;
  description: string;
}


function Product({ code, name, description }: IProps) {
  return (
    <Link href={'/catalog/' + code}>
      <a className={styles['wrapper']}>
        <div className={styles['content']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
      </a>
    </Link>
  );
}

export default Product;
