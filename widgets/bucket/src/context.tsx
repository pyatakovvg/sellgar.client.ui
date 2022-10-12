
import React from 'react';
import { useDispatch } from 'react-redux';

import { getBucket } from './store/commands';


interface IProps {
  children: any;
}

export function Provider({ children }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBucket());
  }, []);

  return React.Children.map(children, (child) => (
    React.cloneElement(child)
  ));
}
