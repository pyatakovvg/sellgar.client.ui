
import React from 'react';
import Link from 'next/link';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  href: string;
  children: any;
}


function DefaultLink({ className, href, children }: IProps): JSX.Element | null {
  const linkClassName = React.useMemo(() => cn(styles['link'], className), [className]);

  return (
    <Link className={linkClassName} href={href}>
      { children }
    </Link>
  );
}

DefaultLink.defaultProps = {
  className: null,
  href: '#',
  children: null,
};

export default DefaultLink;
