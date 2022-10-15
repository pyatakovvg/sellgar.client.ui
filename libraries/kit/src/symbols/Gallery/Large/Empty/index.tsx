
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function Empty() {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-images'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
    </div>
  );
}

export default React.memo(Empty);
