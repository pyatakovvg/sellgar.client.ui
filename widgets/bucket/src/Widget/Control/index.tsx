
import { Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import { resetStateAction } from '../../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onClick(): void;
}


function Control({ onClick }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction(null));
    }
  }, []);

  return (
    <div className={styles['wrapper']} onClick={onClick}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fa-solid fa-cart-shopping')} />
      </div>
      <div className={styles['content']}>
        <Text>Нет товаров</Text>
      </div>
    </div>
  );
}

export default Control;
