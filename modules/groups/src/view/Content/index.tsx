
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
            <Link className={styles['link']} href={'/catalog/' + group['code']}>
              <CatalogItem {...group} />
            </Link>
          </div>
      ))}
    </section>
  );
}

export default Content;
