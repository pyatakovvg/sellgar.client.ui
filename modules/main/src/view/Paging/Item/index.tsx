
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function PagingItem({ page = 1 }: any) {
  const router = useRouter();
  const activePage = Number(router['query']?.['page'] ?? 1);

  const itemClassName = React.useMemo(() => {
    return cn(styles['link'], {
      [styles['is-active']]: activePage === page,
    });
  }, [router['query']]);

  return (
    <Link href={'/' + (page > 1 ? '?page=' + (page) : '')}>
      <a className={itemClassName}>
        <span className={styles['title']}>{ page }</span>
      </a>
    </Link>
  );
}

export default PagingItem;
