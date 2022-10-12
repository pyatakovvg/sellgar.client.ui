
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
}


function DefaultText({ className }: IProps) {
  const contentClassName = React.useMemo(() => cn(styles['logotype'], className), [className]);

  return (
    <span className={contentClassName} />
  );
}

DefaultText.defaultProps = {
  className: null,
};

export default DefaultText;
