
import { CatalogItem } from '@library/design';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps) {
  const router = useRouter();

  return (
    <section className={styles['wrapper']}>
      {data.map((category) => (
        <div key={category['code']} className={styles['item']}>
          <Link href={'/catalog/' + router['query']['groupCode'] + '/' + category['code']}>
            <a className={styles['link']}>
              <CatalogItem {...category} />
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Content;
