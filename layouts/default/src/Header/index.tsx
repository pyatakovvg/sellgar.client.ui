
import { Logotype } from '@library/kit';
import { Widget as BucketWidget } from '@widget/bucket';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


function HeaderComponent() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['logotype']}>
          <Link href={'/'}>
            <a>
              <Logotype type={'middle'} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles['controls']}>
        <BucketWidget />
      </div>
    </section>
  );
}

export default HeaderComponent;
