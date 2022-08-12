
import { Header, Button } from '@library/kit';
import { Dialog, openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import DialogOpinion from './Dialog';
import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  data: Array<any>;
  meta: any;
}

function Comments({ uuid, data, meta }: IProps): JSX.Element {
  const dispatch = useDispatch();

  function handleOpinion() {
    dispatch(openDialog('opinion', {
      productUuid: uuid,
    }));
  }

  return (
    <section id={'opinion'} className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['title']}>
          <Header level={3}>Отзывы { meta['totalRows'] }</Header>
        </div>
        <div className={styles['controls']}>
          <Button size={'small'} onClick={handleOpinion}>Написать отзыв</Button>
        </div>
      </div>
      <div className={styles['content']}>
        <Content data={data} />
      </div>

      <Dialog name={'opinion'}>
        <DialogOpinion onSubmit={(a: any) => console.log(a)} />
      </Dialog>
    </section>
  );
}

export default Comments;
