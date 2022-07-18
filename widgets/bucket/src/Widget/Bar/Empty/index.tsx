
import { Text, Button } from '@library/kit';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { changeOpen } from '../../../store/commands';

import styles from './@media/index.module.scss';


function Empty() {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(changeOpen(false));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['description']}>
        <Text>Посмотрите предложения на <Link href={'/'}><a className={styles['link']} onClick={handleClose}>главной&nbsp;странице</a></Link> или воспользуйтесь поиском</Text>
      </div>
      <div className={styles['controls']}>
        <Link href={'/'}>
          <a onClick={handleClose}>
            <Button form={'outline'}>На главную</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Empty;
