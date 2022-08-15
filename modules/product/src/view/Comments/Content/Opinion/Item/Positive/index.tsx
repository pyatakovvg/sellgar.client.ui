
import { Text } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  children: string;
}


function Positive({ children }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-plus'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['thumb']}>
          <span className={iconClassName} />
        </div>
        <div className={styles['title']}>
          <Text type={'strong'}>Преимущества:</Text>
        </div>
      </div>
      <div className={styles['content']}>
        <Text>{ children }</Text>
      </div>
    </div>
  );
}

export default Positive;
