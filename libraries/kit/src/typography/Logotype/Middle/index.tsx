
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  href: string;
  children: JSX.Element | string;
}


function DefaultText({ className, href, children }: IProps): JSX.Element | null {
  const contentClassName = React.useMemo(() => cn(styles['content'], className), [className]);

  return (
    <a className={contentClassName} href={href}>{ children }</a>
  );
}

DefaultText.defaultProps = {
  className: null,
  href: '#',
  children: null,
};

export default DefaultText;
