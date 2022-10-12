
import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


function Information() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Link href={'mail:support@sellgar.ru'}>
          <a className={styles['email']}>support@sellgar.ru</a>
        </Link>
        <Link href={'phone:+79999999999'}>
          <a className={styles['phone']}>+7 999 999 99 99</a>
        </Link>
      </div>
    </div>
  );
}

export default Information;
