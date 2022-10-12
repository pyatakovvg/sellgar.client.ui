
import { Checkbox, Text } from '@library/kit';

import React from 'react';
import { useRouter } from 'next/router';

import styles from './@media/index.module.scss';


function normalizeQuery(query: any) {
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


function AttributeValue({ code, value, unit }: any) {
  const router = useRouter();
  const query = router['query'];

  async function handleSelect(value: string) {
    const newQuery: any = { ...query };
    delete newQuery['groupCode'];
    delete newQuery['categoryCode'];

    await router.push({
      pathname: '/catalog/' + router['query']['groupCode'] + '/' + router['query']['categoryCode'],
      query: {
        ...newQuery,
        ['attr[' + code + ']']: getUpdatedQuery(normalizeQuery(query['attr[' + code + ']']), value),
      },
    });
  }

  return (
    <div className={styles['wrapper']}>
      <Checkbox value={normalizeQuery(query['attr[' + code + ']']).some((item) => item === value)} onChange={() => handleSelect(value)}>
        <Text>{ value } { unit?.['name'] || '' }</Text>
      </Checkbox>
    </div>
  );
}

export default AttributeValue;
