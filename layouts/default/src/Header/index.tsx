
import { Logotype, Header, Text, Link } from '@library/kit';
import { Widget as BucketWidget } from '@widget/bucket';

import React from 'react';

import styles from './default.module.scss';


function HeaderComponent() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <Link href={'/'}>
          <Logotype />
        </Link>
      </div>
      <div className={styles['header']}>
        <Header level={4}>Сантехника</Header>
      </div>
      <div className={styles['content']}>
        <Text>тел. <Link href={'phone:+79999999999'}>+7 (999) 999-99-99</Link></Text>
        <Text>email. <Link href={'mail:support@sellgar.ru'}>support@sellgar.ru</Link></Text>
      </div>
      <div className={styles['controls']}>
        <BucketWidget />
      </div>
    </section>
  );
}

export default HeaderComponent;
