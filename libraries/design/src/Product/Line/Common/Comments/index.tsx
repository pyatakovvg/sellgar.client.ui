
import { Rating } from '@library/kit';

import React from 'react';

import Icon from './Icon';

import styles from './@media/index.module.scss';


interface IProps {

}


function Comments({  }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['rating']}>
        <Rating value={4} />
      </div>
      <div className={styles['comments']}>
        <Icon count={3} />
      </div>
    </div>
  );
}

export default Comments;
