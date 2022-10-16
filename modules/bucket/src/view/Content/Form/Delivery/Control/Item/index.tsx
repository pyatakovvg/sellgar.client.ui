
import { Text } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  description: string;
  isActive?: boolean;
  value?: string;
  onClick?(): void;
}


function Delivery({ name, description, isActive, onClick }: IProps) {
  const iconClassName = cn(styles['icon'], {
    [styles['is-active']]: isActive,
  });

  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <span className={iconClassName} />
      <div className={styles['content']}>
        <Text type={'strong'}>{ name }</Text>
        <Text type={'description'}>{ description }</Text>
      </div>
    </div>
  );
}

export default Delivery;
