
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
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={wrapperClassName} onClick={onChange}>
      { value }
    </div>
  );
}

export default ModeItem;
