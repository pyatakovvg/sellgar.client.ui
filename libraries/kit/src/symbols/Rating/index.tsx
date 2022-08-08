
import React from 'react';

import Small from "./Small";


type TType = 'small' | 'large';

interface IProps {
  type?: TType,
  value: number;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    default: return <Small {...rest} />
  }
}

Factory.defaultProps = {
  type: 'small',
};

export default React.memo(Factory);
