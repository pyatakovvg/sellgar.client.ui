
import { Text, Select } from '@library/kit';

import React from 'react';
import { useRouter } from 'next/router';

import styles from './@media/index.module.scss';


function Sort() {
  const router = useRouter();
  const query = router['query'];

  async function handleChangeDirection(value: number) {
    await router.push({
      pathname: '/',
      query: {
        sort: value
      }
    });
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['label']}>
        <Text type={'description'}>Сортировка:</Text>
      </div>
      <div className={styles['control']}>
        <Select
          type={'simple'}
          value={Number(query?.['sort'] || 1)}
          optionKey={'code'}
          optionValue={'name'}
          options={[{
            code: 1,
            name: 'Сначала недорогие',
          }, {
            code: 2,
            name: 'Сначала дорогие',
          }, {
            code: 3,
            name: 'По наименованию',
          }]}
          onChange={handleChangeDirection}
        />
      </div>
    </div>
  );
}

export default Sort;
