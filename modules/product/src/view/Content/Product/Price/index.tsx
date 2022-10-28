
import React from 'react';

import Small from './Small';
import Large from './Large';


interface IProps {
  type?: 'small' | 'large';
  uuid: string;
  product: any;
}


function Factory({ type, ...rest }: IProps) {
  switch (type) {
    case 'small': return <Small {...rest} />;
    default: return <Large {...rest} />;
  }
}

export default Factory;
