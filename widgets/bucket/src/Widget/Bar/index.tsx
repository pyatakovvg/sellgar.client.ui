
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Empty from './Empty';
import Content from './Content';

import { selectData } from "../../store/slice";
import { getBucket } from '../../store/commands';

import styles from './@media/index.module.scss';


function Bar() {
  const dispatch = useDispatch();
  const bucket = useSelector(selectData) as any;

  React.useEffect(() => {
    dispatch(getBucket());
  }, []);


  if ( ! bucket || ! bucket?.['products'].length) {
    return (
      <div className={styles['wrapper']}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <Content />
    </div>
  );
}

export default Bar;
