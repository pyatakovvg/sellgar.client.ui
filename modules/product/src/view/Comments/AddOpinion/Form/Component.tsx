
import { InputField, TextareaField } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  handleSubmit(): void;
}

function Form({ handleSubmit }: IProps) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      {/*<div className={styles['fields']}>*/}
      {/*  <div className={styles['col']}>*/}
      {/*    <Rating value={0} type={'control'}>Общяя оценка:</Rating>*/}
      {/*  </div>*/}
      {/*  <div className={styles['col']}>*/}
      {/*    <Rating value={0} type={'control'}>Общяя оценка:</Rating>*/}
      {/*  </div>*/}
      {/*  <div className={styles['col']}>*/}
      {/*    <Rating value={0} type={'control'}>Общяя оценка:</Rating>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <InputField name={'positive'} placeholder={'Достоинства'} />
        </div>
        <div className={styles['field']}>
          <InputField name={'negative'} placeholder={'Недостатки'} />
        </div>
        <div className={styles['field']}>
          <TextareaField name={'description'} placeholder={'Отзыв'} />
        </div>
      </div>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <InputField name={'author'} placeholder={'Имя'} />
        </div>
        <div className={styles['field']}>
          <InputField name={'email'} placeholder={'Email'} />
        </div>
      </div>
    </form>
  );
}

export default Form;
