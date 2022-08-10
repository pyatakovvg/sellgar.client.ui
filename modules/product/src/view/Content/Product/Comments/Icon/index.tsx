
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  count: number;
}


function IconComments({ count }: IProps): JSX.Element {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-message'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['thumb']}>
        <span className={iconClassName} />
      </div>
      <div className={styles['value']}>
        <span className={styles['text']}>{ count }</span>
      </div>
    </div>
  );
}

export default IconComments;
