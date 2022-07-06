
import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';

import { getBucket } from '../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  url: string;
  onCheckout(): void;
}


function Bar({ url, onCheckout }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBucket(url));
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
