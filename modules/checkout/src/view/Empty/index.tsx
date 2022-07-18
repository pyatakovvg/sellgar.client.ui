
import { Header, Text, Button } from '@library/kit';

import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function Empty() {
  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <div className={styles['promo']}>
          <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
        </div>
        <div className={styles['header']}>
          <Header level={2}>Корзина пуста</Header>
        </div>
        <div className={styles['description']}>
          <Text>Посмотрите предложения на <Link href={'/'}><a className={styles['link']}>главной странице</a></Link>,<br/>воспользуйтесь каталогом или поиском</Text>
        </div>
        <div className={styles['controls']}>
          <Link href={'/'}>
            <a>
              <Button form={'outline'} mode={'primary'}>На главную</Button>
            </a>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Empty;
