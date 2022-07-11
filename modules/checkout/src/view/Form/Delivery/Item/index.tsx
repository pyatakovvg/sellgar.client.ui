
import { Text } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  isActive?: boolean;
  value?: string;
  children: any;
  onClick?(): void;
}


function Delivery({ children, isActive, onClick }: IProps): JSX.Element {
  const wrapperClassName = cn(styles['wrapper'], {
    [styles['is-active']]: isActive,
  });

  return (
    <div className={wrapperClassName} onClick={onClick}>
      <Text>{ children }</Text>
    </div>
  );
}

export default Delivery;
