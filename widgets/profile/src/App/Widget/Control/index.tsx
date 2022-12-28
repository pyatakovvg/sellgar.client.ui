
import React from 'react';
import { useSelector } from 'react-redux';

import { selectData, selectInUpdateProcess, selectInDeleteProcess } from '../../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onClick(): void;
}


function Control({ onClick }: IProps) {
  // const bucket = useSelector(selectData) as any;
  const inUpdateProcess = useSelector(selectInUpdateProcess);
  const inDeleteProcess = useSelector(selectInDeleteProcess);

  const isProcess = (inDeleteProcess || !! inUpdateProcess.length);

  if (isProcess) {
    return (
      <div className={styles['wrapper']}>
        <span className={cn(styles['icon'], styles['spine'], 'fa-solid fa-circle-notch')} />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fa-solid fa-user')} />
      </div>
    </div>
  );
}

export default Control;
