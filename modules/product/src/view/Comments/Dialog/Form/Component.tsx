
import { Header, InputField, TextareaField, Button } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  handleSubmit(): void;
}

function Form({ handleSubmit }: IProps) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Отзыв</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <InputField name={'author'} label={'Представьтесь'} />
        </div>
        <div className={styles['field']}>
          <TextareaField name={'description'} label={'Отзыв'} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'} mode={'success'}>Отправить</Button>
      </div>
    </form>
  );
}

export default Form;
