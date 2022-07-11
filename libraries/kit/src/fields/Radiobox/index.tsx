
import React from 'react';
import { Field } from 'redux-form';

import { Wrapper } from '../../symbols/Radio';


interface IProps {
  name: string;
  children: any;
}


function RadioField({ input, children, ...props }: any) {
  return (
    <Wrapper {...input} {...props}>{ children }</Wrapper>
  );
}

function CheckBoxField({ name, ...props }: IProps) {
  return (
    <Field name={name} {...props} component={RadioField} />
  );
}

export default CheckBoxField;
