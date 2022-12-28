"use client";

import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog } from '../store/commands';
import { resetStateAction, selectName, selectData, selectIsOpen } from '../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  children: React.ReactElement;
  onClose?(name: string): void;
}


function Dialog({ name, children, onClose }: IProps) {
  const dispatch = useDispatch();
  const wrapperRef = React.useRef(null);

  const data = useSelector(selectData);
  const isOpen = useSelector(selectIsOpen);
  const actionDialogName = useSelector(selectName);

  function handleCloseDialog() {
    closeDialog();
    onClose && onClose(name);
  }

  function handleOutClick(event: any) {
    const { current: wrapperElement } = wrapperRef;
    const target = event.target;

    if (wrapperElement === target) {
      handleCloseDialog();
    }
  }

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction(null));
    };
  }, []);

  const classNameCloseDialog = React.useMemo(() => cn(styles['close'], 'icon-close'), []);

  return isOpen && (name === actionDialogName) && (
    ReactDOM.createPortal((
      <div className={styles['wrapper']}>
        <div ref={wrapperRef} className={styles['content']} onClick={handleOutClick}>
          <div className={styles['dialog']}>
            <span className={classNameCloseDialog} onClick={handleCloseDialog} />
            { React.cloneElement(children, { data }) }
          </div>
        </div>
      </div>
    ), document.querySelector('#dialog') as Element)
  );
}

export default Dialog;
