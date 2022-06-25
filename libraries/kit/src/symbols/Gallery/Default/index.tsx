
import React from 'react';

import styles from './default.module.scss';


interface IProps {
  src: Array<string>;
}


function Default({ src }: IProps): JSX.Element | null {
  return (
    <div className={styles['wrapper']}>
      {src.map((item: string, index: number) => (
        <img key={index} src={item} alt={''} />
      ))}
    </div>
  );
}

export default Default;
