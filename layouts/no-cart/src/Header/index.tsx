
import { Logotype } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import styles from './default.module.scss';


function Header(): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <Link href={'/'}>
          <a>
            <Logotype />
          </a>
        </Link>
      </div>
      <div className={styles['content']}>

      </div>
    </section>
  );
}

export default Header;
