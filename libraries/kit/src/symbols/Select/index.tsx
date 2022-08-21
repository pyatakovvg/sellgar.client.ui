
import React from 'react';

import SimpleSelect from './Simple';
import DefaultSelect from './Default';


type TType = 'list' | 'select' | 'simple';
type TMode = 'default' | 'primary' | 'danger' | 'success';
type TOption = {
  [key: string]: any;
};

interface IProps {
  className?: string;
  type?: TType;
  mode?: TMode;
  value?: any | null;
  options: Array<TOption>,
  optionKey?: string;
  optionValue?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange?(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    case 'simple': return <SimpleSelect {...rest} />;
    default: return <DefaultSelect {...rest} />;
  }
}

export default React.memo(Factory);
