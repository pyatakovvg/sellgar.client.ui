
import {Link, Text} from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';

import { selectData } from '../../../store/slice';

import styles from './@media/index.module.scss';


function Content() {
  const data = useSelector(selectData) as any;

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {data.map((item: any) => (
          <div key={item['uuid']} className={styles['item']}>
            <Product {...item} />
          </div>
        ))}
      </div>
      <div className={styles['controls']}>
        <Link href={'/search'}>
          <Text>Смотреть все товары</Text>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Content);
