
import { Button } from '@library/kit';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit, reset, isPristine, isValid } from 'redux-form';

import Form from './Form';

import { addComment } from '../../../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  productUuid: string;
}


function Opinion({ productUuid }: IProps) {
  const dispatch = useDispatch();
  const valid = useSelector(isValid('opinion'));
  const pristine = useSelector(isPristine('opinion'));
  const [isOpen, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(data: any) {
    const isSuccess = await dispatch<any>(addComment({
      ...data,
      themeCode: 'opinion',
    }));
    if (isSuccess) {
      dispatch(reset('opinion'));
      setOpen(false);
    }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['control']}>
        <Button onClick={handleOpen}>Написать отзыв</Button>
      </div>
      {isOpen && (
        <div className={styles['content']}>
          <div className={styles['form']}>
            <Form
              initialValues={{
                productUuid,
              }}
              onSubmit={handleSubmit}
            />
          </div>
          <div className={styles['controls']}>
            <Button mode={'success'} disabled={ ! valid || pristine} onClick={() => dispatch(submit('opinion'))}>Отправить</Button>
            <Button form={'context'} mode={'danger'} onClick={handleClose}>Отменить</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Opinion;
