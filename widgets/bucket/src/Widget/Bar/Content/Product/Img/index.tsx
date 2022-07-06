
import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  src: string | null;
}


function Img({ src }: IProps): JSX.Element {
  const [isError, setError] = React.useState(false);

  return (
    <div className={styles['wrapper']}>
      { !! src && (
        <img className={styles['image']} src={src} alt={''} onError={() => setError(true)} />
      )}
      {( ! src || isError) && (
        <span className={styles['empty']} />
      )}
    </div>
  );
}

export default Img;
