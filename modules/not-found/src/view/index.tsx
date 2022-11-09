
import { Header, Text, Link, Button } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Page() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['promo']}>
          <span className={styles['number']}>404</span>
        </div>
        <div className={styles['header']}>
          <Header level={2}>Страница не существует</Header>
        </div>
        <div className={styles['description']}>
          <Text>Посмотрите предложения на <Link className={styles['link']} href={'/'}>главной странице</Link>,<br/>воспользуйтесь <Link href={'/catalog'}>каталогом</Link> или поиском</Text>
        </div>
        <div className={styles['controls']}>
          <Link href={'/'}>
            <Button form={'outline'} mode={'primary'}>На главную</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
