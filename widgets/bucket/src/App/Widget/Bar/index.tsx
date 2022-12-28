
import React from 'react';

import Empty from './Empty';
import Content from './Content';

import { getBucket } from '../../store/commands';
import { useBucketData } from "../../store/slice";

import styles from './@media/index.module.scss';


function Bar() {
  const bucket = useBucketData();

  React.useEffect(() => {
    (async () => {
      await getBucket();
    })();
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

export default React.memo(Bar);
