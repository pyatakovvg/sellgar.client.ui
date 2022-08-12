
import { Text, Rating } from '@library/kit';
import moment from '@package/moment';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  author: string;
  description: string;
  createdAt: string;
}


function Item({ author, description, createdAt }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['author']}>
          <div className={styles['name']}>
            <Text type={'strong'}>{ author }</Text>
          </div>
          <div className={styles['rating']}>
            <Rating type={'small'} value={2}>Общая оценка:</Rating>
          </div>
        </div>
        <div className={styles['date']}>
          <Text type={'description'}>{ moment(createdAt).format('DD.MM.YYYY') }</Text>
        </div>
      </div>
      <div className={styles['content']}>
        <Text>"{ description }"</Text>
      </div>
    </div>
  );
}

export default Item;
