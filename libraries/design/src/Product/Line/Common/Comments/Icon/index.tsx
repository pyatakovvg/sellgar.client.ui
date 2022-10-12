
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  value: number;
}


function IconComments({ value }: IProps): JSX.Element {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-message'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['thumb']}>
        <span className={iconClassName} />
      </div>
      <div className={styles['value']}>
        <span className={styles['text']}>{ value }</span>
      </div>
    </div>
  );
}

export default IconComments;
