
import { Text } from "@library/kit";

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  isActive: boolean;
  value: string;
  price: number;
  currency: any;
  onChange(): void;
}


function ModeItem({ isActive, value, onChange }: IProps): JSX.Element {
  const markerClassName = React.useMemo(() => cn(styles['marker'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={styles['wrapper']} onClick={onChange}>
      <div className={styles['control']}>
        <span className={markerClassName} />
      </div>
      <div className={styles['content']}>
        <Text>{ value }</Text>
      </div>
    </div>
  );
}

export default ModeItem;
