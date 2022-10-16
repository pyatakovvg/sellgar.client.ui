
import { selectData, selectInProcess } from '@widget/bucket';

import React from 'react';
import { useSelector } from 'react-redux';

import Empty from './Empty';
import Loader from './Loader';
import Content from './Content';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
}


function Checkout({ delivery, payments }: IProps) {
  const bucket = useSelector(selectData);
  const inProcess = useSelector(selectInProcess);

  if (inProcess) {
    return (
      <Loader />
    );
  }

  if ( ! bucket || ! bucket['products'].length) {
    return (
      <Empty />
    );
  }

  return (
    <Content
      payments={payments}
      delivery={delivery}
    />
  );
}

export default Checkout;
