
import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';

import { getBucket } from '../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  onCheckout(): void;
}


function Bar({ onCheckout }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBucket());
  }, []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Content onCheckout={onCheckout} />
      </div>
    </div>
  );
}

export default Bar;
