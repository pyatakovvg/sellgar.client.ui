
import React from 'react';

import Title from './Title';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  title: string;
  group: any;
  category: any;
  externalId: string;
  vendor: string;
  commentsCount: number;
}


function Common(props: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Title {...props} />
      </div>
      <div className={styles['information']}>
        <Comments {...props} />
      </div>
    </div>
  );
}

export default Common;
