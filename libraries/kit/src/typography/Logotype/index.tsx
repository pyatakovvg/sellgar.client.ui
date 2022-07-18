
import React from 'react';

import Big from './Big';
import Small from './Small';
import Middle from './Middle';


type TType = 'small' | 'middle' | 'big';

interface IProps {
  type?: TType;
  className?: string;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch (type) {
    case 'big': return <Big {...rest} />;
    case 'middle': return <Middle {...rest} />;
    default: return <Small {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
};

export default React.memo(Factory);
