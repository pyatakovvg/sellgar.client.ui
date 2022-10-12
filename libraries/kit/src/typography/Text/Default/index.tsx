
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  children: any;
}


function DefaultText({ className, children }: IProps) {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <p className={contentClassName}>{ children }</p>
  );
}

DefaultText.defaultProps = {
  className: null,
  children: null,
};

export default DefaultText;
