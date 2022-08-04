
import { Logotype, Header, Text } from '@library/kit';
import { Widget as BucketWidget } from '@widget/bucket';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


function HeaderComponent() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <Link href={'/'}>
          <a><Logotype /></a>
        </Link>
      </div>
      <div className={styles['header']}>
        <Header level={4}>Сантехника</Header>
      </div>
      <div className={styles['content']}>
        <Text>тел. <a href={'phone:+79999999999'}>+7 (999) 999-99-99</a></Text>
        <Text>email. <a href={'mail:support@sellgar.ru'}>support@sellgar.ru</a></Text>
      </div>
      <div className={styles['controls']}>
        <BucketWidget />
      </div>
    </section>
  );
}

export default HeaderComponent;
