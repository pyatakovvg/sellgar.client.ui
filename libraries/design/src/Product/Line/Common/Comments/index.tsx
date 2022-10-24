
import { Rating, Link } from '@library/kit';

import React from 'react';

import Icon from './Icon';

import styles from './@media/index.module.scss';


interface IProps {
  group: any;
  category: any;
  externalId: string;
}


function Comments({ externalId, group, category }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['rating']}>
        <Rating value={4} />
      </div>
      <div className={styles['comments']}>
        <Link href={'/catalog/' + group['code'] + '/' + category['code'] + '/' + externalId + '#opinion'}>
          <Icon value={0} />
        </Link>
      </div>
    </div>
  );
}

export default Comments;
