
import React from 'react';

import Title from './Title';
import Modes from './Modes';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  externalId: string;
  item: any;
  group: any;
  category: any;
  brand: any;
  title: string;
  commentsCount: number;
  modes: Array<any>;
  onChange(item: any): void;
}


function Common({ externalId, item, group, category, commentsCount, brand, title, modes, onChange }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Title group={group} category={category} externalId={externalId}>{ title } { brand['name'] }</Title>
      </div>
      <div className={styles['controls']}>
        <Modes item={item} modes={modes} onChange={onChange} />
      </div>
      <div className={styles['information']}>
        <Comments commentsCount={commentsCount} group={group} category={category} externalId={externalId} />
      </div>
    </div>
  );
}

export default Common;
