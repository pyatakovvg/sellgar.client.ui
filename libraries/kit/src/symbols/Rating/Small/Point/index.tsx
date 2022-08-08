
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  value: number;
  index: number;
}


function Point({ value, index }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-star', {
    [styles['active']]: value > index,
    // 'fa-solid fa-star-half-stroke': value > index,
  }), []);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
    </div>
  );
}

export default Point;
