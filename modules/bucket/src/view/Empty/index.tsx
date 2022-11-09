
import { Header, Text, Button, Link } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['promo']}>
          <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
        </div>
        <div className={styles['header']}>
          <Header level={2}>Корзина пуста</Header>
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

export default Empty;
