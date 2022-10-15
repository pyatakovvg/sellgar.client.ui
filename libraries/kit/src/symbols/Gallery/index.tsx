
import React from 'react';

import Large from './Large';
import Default from './Default';


interface IProps {
  type?: 'default' | 'large';
  items: Array<string>;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    case 'large': return <Large {...rest} />;
    default: return <Default {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  items: [],
};

export default Factory;
