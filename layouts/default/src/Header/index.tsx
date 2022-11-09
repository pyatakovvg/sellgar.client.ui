
import { Logotype } from '@library/kit';
import { Widget as BucketWidget } from '@widget/bucket';
import { Widget as SearchWidget } from '@widget/search';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


interface IProps {
  withoutBucket: boolean;
}


function HeaderComponent({ withoutBucket }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['logotype']}>
          <Link href={'/'}>
            <Logotype type={'middle'} />
          </Link>
        </div>
      </div>
      <div className={styles['search']}>
        <SearchWidget />
      </div>
      <div className={styles['controls']}>
        { ! withoutBucket && (
          <BucketWidget />
        )}
      </div>
    </section>
  );
}

export default HeaderComponent;
