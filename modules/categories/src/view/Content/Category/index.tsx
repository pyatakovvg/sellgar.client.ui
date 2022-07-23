
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './@media/index.module.scss';


interface IProps {
  code: string;
  name: string;
  description: string;
  productsCount: number;
}


function Category({ code, name, productsCount }: IProps) {
  const router = useRouter();

  return (
    <Link href={'/catalog/' + router['query']['groupCode'] + '/' + code}>
      <a className={styles['wrapper']}>
        <div className={styles['content']}>
          <Text type={'strong'}>{ name } { productsCount }</Text>
        </div>
      </a>
    </Link>
  );
}

export default Category;
