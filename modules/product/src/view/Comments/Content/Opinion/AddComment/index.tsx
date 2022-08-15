
import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';

import Form from './Form';

import { addComment } from '../../../../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  parentUuid: string;
  productUuid: string;
  onReset(): void;
}


function CommentForm({ parentUuid, productUuid, onReset }: IProps) {
  const dispatch = useDispatch();

  async function handleSubmit(data: any) {
    const isSuccess = await dispatch<any>(addComment({
      ...data,
      themeCode: 'comment',
    }));
    if (isSuccess) {
      dispatch(reset('opinion'));
      onReset();
    }
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={{
          parentUuid,
          productUuid,
        }}
        onSubmit={handleSubmit}
        onReset={onReset}
      />
    </div>
  );
}

export default CommentForm;
