
import React from 'react';

import Default from './Default';
import Switch from './Switch';


type TType = 'default' | 'switch';

interface IProps {
  className?: string;
  type?: TType;
  value: boolean;
  children?: JSX.Element | string;
  disabled?: boolean;
  onCheck(value: boolean): void;
}


function Factory({ type, children, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    case 'switch': return <Switch {...rest} />;
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  className: null,
  type: 'default',
  value: false,
  children: null,
  disabled: false,
};

export default React.memo(Factory);
