
import React from 'react';

import Default from './Default';


type TType = 'default';

interface IProps {
  type?: TType;
  className?: string;
  href: string;
  children: any;
}


function Factory({ type, children, ...rest }: IProps) {
  switch (type) {
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
  children: null,
};

export default React.memo(Factory);
