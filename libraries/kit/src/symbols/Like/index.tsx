
import React from 'react';

import Small from "./Small";
import Large from "./Large";


type TType = 'small' | 'large';

interface IProps {
  type?: TType,
  value: number;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    case 'large': return <Large {...rest} />;
    default: return <Small {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'large',
};

export default React.memo(Factory);
