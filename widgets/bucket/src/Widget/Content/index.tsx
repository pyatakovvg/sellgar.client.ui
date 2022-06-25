
import React from 'react';

// import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {

}


function Content({  }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <p>fghfghfghf</p>
      </div>
    </div>
  );
}

export default Content;
