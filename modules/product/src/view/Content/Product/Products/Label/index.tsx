
import { Header } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  label: string;
  isActive: boolean;
  onClick(): void;
}


function Label({ label, isActive, onClick }: IProps) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['active']]: isActive,
  }), [isActive]);

  return (
    <div className={wrapperClassName} onClick={onClick}>
      <Header level={4}>{ label }</Header>
    </div>
  );
}

export default Label;
