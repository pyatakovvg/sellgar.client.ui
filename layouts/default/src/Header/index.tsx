
import { Logotype } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Header(): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <Logotype />
    </section>
  );
}

export default Header;
