
import { Text, Input } from '@library/kit';

import React from 'react';
import { useRouter } from "next/router";

import styles from './@media/index.module.scss';


function getQuery(query: any) {
  if ( ! query) {
    return [];
  }
  else if (query instanceof Array) {
    return query;
  }
  return [query];
}

// function getUpdatedQuery(query: Array<any>, value: string) {
//   if (query.some((item: string) => item === value)) {
//     return query.filter((item: string) => item !== value);
//   }
//   return [value, ...query];
// }


function Price() {
  const router = useRouter();
  const priceFrom = getQuery(router['query']['priceFrom']);
  const priceTo = getQuery(router['query']['priceTo']);
  
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text type={'strong'}>Цена</Text>
      </div>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <Input value={priceFrom[0] || '0'} />
        </div>
        <span className={styles['delimiter']}>-</span>
        <div className={styles['field']}>
          <Input value={priceTo[0] || '999999'} />
        </div>
      </div>
    </div>
  );
}

export default Price;
