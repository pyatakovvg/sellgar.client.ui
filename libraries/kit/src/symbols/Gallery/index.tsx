
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  width: number;
  height: number;
  items: Array<string>;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <Default {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  items: [],
};

export default Factory;
