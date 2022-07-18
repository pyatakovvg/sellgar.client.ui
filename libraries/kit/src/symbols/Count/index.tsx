
import React from 'react';

import DefaultCount from './Default';


type TType = 'default';

interface IProps {
  className?: string;
  type?: TType;
  value: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  onChange(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    default: return <DefaultCount {...rest} />;
  }
}

export default React.memo(Factory);
