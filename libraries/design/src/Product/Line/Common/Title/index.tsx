
import { Header } from '@library/kit';

import React from 'react';
import Link from "next/link";

import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  group: any;
  category: any;
  externalId: string;
}


function Title({ name, group, category, externalId }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Link className={styles['link']} href={'/catalog/' + group['code'] + '/' + category['code'] + '/' + externalId}>
          <Header className={styles['title']} level={4}>{ name }</Header>
        </Link>
      </div>
      <div className={styles['vendor']}>
        {/*<Text type={'description'}>Код: { vendor }</Text>*/}
      </div>
    </div>
  );
}

export default Title;
