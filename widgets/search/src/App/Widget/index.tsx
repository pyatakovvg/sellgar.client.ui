"use client";

import React from 'react';
import { useSelector } from 'react-redux';

import Bar from './Bar';
import Control from './Control';

import { selectIsOpen } from '../store/slice';
import { changeOpen } from '../store/commands';

import styles from './@media/index.module.scss';


function Widget() {
  const wrapperRef = React.useRef(null);
  const isOpen = useSelector(selectIsOpen) as boolean;
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    function handleClose(event: MouseEvent) {
      const target: any = event['target'];
      const wrapperElement: any = wrapperRef['current'];

      if ( ! wrapperElement) {
        return void 0;
      }
      else if ( ! wrapperElement.contains(target)) {
        if (wrapperElement.getAttribute('aria-expanded') === 'true') {
          changeOpen(false);
        }
      }
    }

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  function handleOpen(value: string) {
    if (value) {
      changeOpen(true);
      setSearch(value);
    }
    else {
      changeOpen(false);
      setSearch('');
    }
  }

  return (
    <div className={styles['wrapper']} aria-expanded={isOpen} ref={wrapperRef}>
      <div className={styles['control']}>
        <Control onChange={handleOpen} />
      </div>
      <div className={styles['content']}>
        {isOpen && (
          <Bar search={search} />
        )}
      </div>
    </div>
  );
}

export default React.memo(Widget);
