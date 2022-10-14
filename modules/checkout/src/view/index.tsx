
import { getBucket, selectData, selectInProcess } from '@widget/bucket';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Empty from './Empty';
import Loader from './Loader';
import Content from './Content';

import styles from './@media/index.module.scss';


interface IProps {
  payment: Array<any>;
  delivery: Array<any>;
}


function Checkout({ delivery, payment }: IProps) {
  const dispatch = useDispatch();

  const bucket = useSelector(selectData);
  const inProcess = useSelector(selectInProcess);

  React.useEffect(() => {
    dispatch(getBucket());
  }, []);

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
      payment={payment}
      delivery={delivery}
    />
  );
}

export default Checkout;
