
import React from 'react';

import DefaultButton from "./Default";
import ContextButton from "./Context";
import OutlineButton from "./Outline";


type TSize = 'small' | 'middle' | 'large';
type TForm = 'default' | 'context' | 'outline';
type TType = 'submit' | 'button' | 'reset';
type TMode = 'primary' | 'danger' | 'success' | 'info';

interface IProps {
  form?: TForm;
  className?: string,
  type?: TType,
  mode?: TMode,
  size?: TSize,
  children?: string | number | null,
  disabled?: boolean,
  inProcess?: boolean,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}


function Factory({ form, ...rest }: IProps): JSX.Element | null {
  switch(form) {
    case 'outline': return <OutlineButton {...rest} />
    case 'context': return <ContextButton {...rest} />
    default: return <DefaultButton {...rest} />
  }
}

Factory.defaultProps = {
  className: null,
  form: 'default',
  type: 'button',
  mode: 'primary',
  children: 'Button',
  disabled: false,
};

export default React.memo(Factory);
