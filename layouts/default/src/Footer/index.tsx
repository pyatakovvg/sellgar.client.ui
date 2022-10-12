
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Footer() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Text className={styles['text']}>© Sellgar, 2022. Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату. Данный сайт не является публичной офертой.</Text>
      </div>
      <div className={styles['line']}>

      </div>
    </div>
  );
}

export default Footer;
