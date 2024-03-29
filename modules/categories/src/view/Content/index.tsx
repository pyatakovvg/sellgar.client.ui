
import { CatalogItem } from '@library/design';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


interface IProps {
  data: any;
}


function Content({ data }: IProps) {
  return (
    <section className={styles['wrapper']}>
      {data['categories'].map((category: any) => (
        <div key={category['code']} className={styles['item']}>
          <Link className={styles['link']} href={'/catalog/' + data['code'] + '/' + category['code']}>
            <CatalogItem {...category} />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Content;
