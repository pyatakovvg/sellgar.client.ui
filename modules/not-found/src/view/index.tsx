
import { Header, Text, Link } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Page() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['code']}>
          <span className={styles['number']}>404</span>
        </div>
        <div className={styles['header']}>
          <Header level={2}>Страница не существует</Header>
        </div>
        <div className={styles['description']}>
          <Text>Перейдите на <Link href={'/'}>главную</Link> страницу или воспользуйтесь <Link href={'/catalog'}>каталогом</Link>.</Text>
        </div>
      </div>
    </div>
  );
}

export default Page;
