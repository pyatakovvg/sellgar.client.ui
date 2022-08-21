
import React from 'react';

import Small from "./Small";
import Large from "./Large";
import Control from "./Control";


type TType = 'small' | 'large' | 'control';

interface IProps {
  type?: TType,
  value: number;
  children?: string;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    case 'large': return <Large {...rest} />;
    case 'control': return <Control {...rest} />;
    default: return <Small {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'large',
};

export default React.memo(Factory);
