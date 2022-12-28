
import { Logotype } from '@library/kit';
import BucketWidget from '@widget/bucket';
import SearchWidget from '@widget/search';
// import { Widget as ProfileWidget } from '@widget/profile';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


interface IProps {
  withoutBucket: boolean;
}
console.log(BucketWidget)

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
        {/*<div className={styles['control']}>*/}
        {/*  <ProfileWidget />*/}
        {/*</div>*/}
        { ! withoutBucket && (
          <div className={styles['control']}>
            <BucketWidget />
          </div>
        )}
      </div>
    </section>
  );
}

export default HeaderComponent;
