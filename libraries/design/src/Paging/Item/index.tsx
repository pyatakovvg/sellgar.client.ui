
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function getQuery(query: any) {
  const newQuery = { ...query };

  delete newQuery['page'];
  delete newQuery['groupCode'];
  delete newQuery['categoryCode'];

  return newQuery;
}


function PagingItem({ page = 1 }: any) {
  const router = useRouter();
  const query = router['query'];
  const activePage = Number(router['query']?.['page'] ?? 1);

  const itemClassName = React.useMemo(() => {
    return cn(styles['link'], {
      [styles['is-active']]: activePage === page,
    });
  }, [router['query']]);

  return (
    <Link href={{
      pathname: '/catalog/' + query['groupCode'] + '/' + query['categoryCode'],
      query: {
        ...getQuery(query),
        ...((page > 1) ? { page } : {})
      }
    }}>
      <a className={itemClassName}>
        <span className={styles['title']}>{ page }</span>
      </a>
    </Link>
  );
}

export default PagingItem;
