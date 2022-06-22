
import { Logotype } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


function Header(): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <Link href={'/'}>
        <a>
          <Logotype />
        </a>
      </Link>
    </section>
  );
}

export default Header;
