
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Control from './Control';
import Bar from './Bar';

import { selectIsOpen } from '../store/slice';
import { changeOpen, getBucket } from '../store/commands';

import styles from './@media/index.module.scss';


function Widget({ url, onCheckout }: any) {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen) as boolean;

  React.useEffect(() => {
    dispatch(getBucket(url));
  }, []);

  async function handleOpen() {
    dispatch(changeOpen( ! isOpen));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['control']}>
        <Control onClick={() => handleOpen()} />
      </div>
      <div className={styles['content']}>
        {isOpen && (
          <Bar url={url} onCheckout={onCheckout} />
        )}
      </div>
    </div>
  );
}

export default React.memo(Widget);
