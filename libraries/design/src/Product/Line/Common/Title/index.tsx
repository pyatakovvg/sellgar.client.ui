
import { Header, Text } from '@library/kit';

import React from 'react';
import Link from "next/link";

import styles from './@media/index.module.scss';


interface IProps {
  title: string;
  group: any;
  category: any;
  externalId: string;
  vendor: string;
}


function Title({ title, group, category, externalId, vendor }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Link href={'/catalog/' + group['code'] + '/' + category['code'] + '/' + externalId}>
          <a className={styles['link']}>
            <Header className={styles['title']} level={4}>{ title }</Header>
          </a>
        </Link>
      </div>
      <div className={styles['vendor']}>
        <Text type={'description'}>Код: { vendor }</Text>
      </div>
    </div>
  );
}

export default Title;
