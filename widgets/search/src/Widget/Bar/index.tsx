
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Empty from './Empty';
import Content from './Content';

import { selectData } from "../../store/slice";
import { getProducts } from '../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  search: string;
}


function Bar({ search }: IProps) {
  const dispatch = useDispatch();
  const data = useSelector(selectData) as any;

  React.useEffect(() => {
    if (search) {
      dispatch<any>(getProducts(search));
    }
  }, [search]);

  if ( ! data.length) {
    return (
      <div className={styles['wrapper']}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <Content />
    </div>
  );
}

export default React.memo(Bar);
