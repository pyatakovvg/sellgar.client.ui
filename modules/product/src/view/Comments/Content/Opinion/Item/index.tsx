
import moment from '@package/moment';
import { Text, Rating, Like } from '@library/kit';

import React from 'react';

import Positive from './Positive';
import Negative from './Negative';

import styles from './@media/index.module.scss';


interface IProps {
  author: string;
  positive: string;
  negative: string;
  description: string;
  createdAt: string;
  onClick(): void;
}


function Item({ author, positive, negative, description, createdAt, onClick }: IProps) {
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
          <Text type={'description'}>{ moment(createdAt).format('LL') }</Text>
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['description']}>
          <Text>"{ description }"</Text>
        </div>
        { !! positive && (
          <div className={styles['line']}>
            <Positive>{ positive }</Positive>
          </div>
        )}
        { !! negative && (
          <div className={styles['line']}>
            <Negative>{ negative }</Negative>
          </div>
        )}
      </div>
      <div className={styles['controls']}>
        <div className={styles['comment']}>
          <span className={styles['link']} onClick={onClick}>Комментировать</span>
        </div>
        <div className={styles['likes']}>
          <Like value={5} />
        </div>
      </div>
    </div>
  );
}

export default Item;
