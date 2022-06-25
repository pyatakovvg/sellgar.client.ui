
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Control from './Control';
import Content from './Content';

import { selectIsOpen } from '../store/slice';
import { changeOpen } from '../store/commands';

import styles from './@media/index.module.scss';


function Widget() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

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
          <Content />
        )}
      </div>
    </div>
  );
}

export default Widget;
