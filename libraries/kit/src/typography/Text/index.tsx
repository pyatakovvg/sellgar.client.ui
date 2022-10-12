
import React from 'react';

import Default from './Default';
import Strong from './Strong';
import Description from './Description';


type TType = 'default' | 'strong' | 'description';

interface IProps {
  type?: TType;
  className?: string;
  children: any;
}


function Factory({ type, children, ...rest }: IProps) {
  switch (type) {
    case 'strong': return <Strong {...rest}>{ children }</Strong>;
    case 'description': return <Description {...rest}>{ children }</Description>;
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
  children: null,
};

export default React.memo(Factory);
