
import { CatalogItem } from '@library/design';

import React from 'react';
import Link from 'next/link';

import styles from './@media/index.module.scss';


interface IProps {
  data: Array<any>;
}


function Content({ data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      {data.map((group) => (
          <div key={group['code']} className={styles['item']}>
            <Link href={'/catalog/' + group['code']}>
              <a className={styles['link']}>
                <CatalogItem {...group} />
              </a>
            </Link>
          </div>
      ))}
    </section>
  );
}

export default Content;
