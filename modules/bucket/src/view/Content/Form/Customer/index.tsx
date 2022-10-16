
import { Header, InputField } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


function Customer() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Данные покупателя</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <InputField name={'name'} placeholder={'Ваше имя'} />
          </div>
          <div className={styles['field']}>
            <InputField type={'phone'} name={'phone'} placeholder={'Мобильный телефон'} />
          </div>
          <div className={styles['field']}>
            <InputField name={'email'} placeholder={'Email (необязательно)'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
