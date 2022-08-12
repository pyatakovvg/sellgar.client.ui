
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Control from './Control';
import Bar from './Bar';

import { selectIsOpen } from '../store/slice';
import { changeOpen } from '../store/commands';

import styles from './@media/index.module.scss';


function Widget() {
  const dispatch = useDispatch();
  const wrapperRef = React.useRef(null);
  const isOpen = useSelector(selectIsOpen) as boolean;

  React.useEffect(() => {
    function handleClose(event: MouseEvent) {
      const target: any = event['target'];
      const wrapperElement: any = wrapperRef['current'];

      if ( ! wrapperElement) {
        return void 0;
      }
      else if ( ! wrapperElement.contains(target)) {
        if (wrapperElement.getAttribute('aria-expanded') === 'true') {
          dispatch(changeOpen(false));
        }
      }
    }

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  function handleOpen() {
    dispatch(changeOpen( ! isOpen));
  }

  return (
    <div className={styles['wrapper']} aria-expanded={isOpen} ref={wrapperRef}>
      <div className={styles['control']}>
        <Control onClick={() => handleOpen()} />
      </div>
      <div className={styles['content']}>
        {isOpen && (
          <Bar />
        )}
      </div>
    </div>
  );
}

export default React.memo(Widget);
