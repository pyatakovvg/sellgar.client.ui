
import { Text } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './@media/index.module.scss';


interface IProps {
  code: string;
  name: string;
  description: string;
}


function Category({ code, name, description }: IProps) {
  const router = useRouter();

  return (
    <Link href={'/catalog/' + router['query']['groupCode'] + '/' + code}>
      <a className={styles['wrapper']}>
        <div className={styles['content']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
      </a>
    </Link>
  );
}

export default Category;
