
import { Checkbox, Text } from '@library/kit';

import React from 'react';
import { useRouter } from 'next/router';

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

function getUpdatedQuery(query: Array<any>, value: string) {
  if (query.some((item: string) => item === value)) {
    return query.filter((item: string) => item !== value);
  }
  return [value, ...query];
}


function Item({ code, name, products }: any) {
  const router = useRouter();
  const query = getQuery(router['query']['brand']);

  async function handleSelect(code: string) {
    const newQuery: any = { ...router['query'] };
    delete newQuery['groupCode'];
    delete newQuery['categoryCode'];

    await router.push({
      pathname: '/catalog/' + router['query']['groupCode'] + '/' + router['query']['categoryCode'],
      query: {
        ...newQuery,
        brand: getUpdatedQuery(query, code)
      },
    });
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['link']}>
        <div className={styles['control']}>
          <Checkbox value={query.some((item: string) => item === code)} onChange={() => handleSelect(code)}>
            <Text type={'strong'}>{ name }</Text>
          </Checkbox>
        </div>
        <span className={styles['count']}>({ products })</span>
      </div>
    </div>
  );
}

export default Item;
