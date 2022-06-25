
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  src: Array<string>;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <Default {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  src: null,
};

export default Factory;
