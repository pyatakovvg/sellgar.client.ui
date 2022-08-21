
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  value: number;
  index: number;
  onClick(value: number): void;
}


function Point({ value, index, onClick }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-star', {
    [styles['active']]: value >= index,
    // 'fa-solid fa-star-half-stroke': value > index,
  }), [value]);

  function handleClick() {
    onClick(index);
  }

  return (
    <div className={styles['wrapper']} onClick={handleClick}>
      <span className={iconClassName} />
    </div>
  );
}

export default Point;
