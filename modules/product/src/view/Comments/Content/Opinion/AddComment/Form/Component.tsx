
import { Button, InputField, TextareaField } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  valid: boolean;
  pristine: boolean;
  handleSubmit(): void;
  onReset(): void;
}


function Form({ valid, pristine, handleSubmit, onReset }: IProps) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <TextareaField name={'description'} placeholder={'Комментарий'} />
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
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'} mode={'success'} disabled={ ! valid || pristine}>Отправить</Button>
        <Button form={'context'} mode={'danger'} onClick={onReset}>Отменить</Button>
      </div>
    </form>
  );
}

export default Form;
