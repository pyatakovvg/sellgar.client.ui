
import { Text, Header } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import Modes from './Modes';

import styles from './@media/index.module.scss';


interface IProps {
  externalId: string;
  item: any;
  group: any;
  category: any;
  brand: any;
  title: string;
  modes: Array<any>;
  onChange(item: any): void;
}


function Common({ externalId, item, group, category, brand, title, modes, onChange }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['title']}>
          <Link href={'/catalog/' + group['code'] + '/' + category['code'] + '/' + externalId}>
            <a className={styles['link']}>
              <Header level={4}>{ title }</Header>
            </a>
          </Link>
        </div>
        <div className={styles['brand']}>
          <Text type={'description'}>{ brand?.['name'] ?? '---' }</Text>
        </div>
      </div>
      <div className={styles['controls']}>
        <Modes item={item} modes={modes} onChange={onChange} />
      </div>
    </div>
  );
}

export default Common;
