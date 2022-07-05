
import { Text } from "@library/kit";

import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  isOne?: boolean;
  isActive?: boolean;
  value: string;
  vendor: string;
  onChange?(): void;
}


function ModeItem({ isOne, isActive, value, vendor, onChange }: IProps): JSX.Element {
  const markerClassName = React.useMemo(() => cn(styles['marker'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={styles['wrapper']} onClick={onChange}>
      { ! isOne && (
        <div className={styles['control']}>
          <span className={markerClassName} />
        </div>
      )}
      <div className={styles['content']}>
        <Text>{ value }</Text>
        <Text type={'description'}>&nbsp;&nbsp;[{ vendor }]</Text>
      </div>
    </div>
  );
}

export default ModeItem;
