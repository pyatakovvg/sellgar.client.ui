
import React from 'react';
import Img from 'next/image';

import Spinner from '../../Spinner';

import styles from './default.module.scss';


interface IProps {
  src: string;
  width: number;
  height: number;
  onLoadingComplete? (): void;
}


function Image({ src, width, height, onLoadingComplete }: IProps) {
  const [isLoaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isLoaded) {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }
  }, [isLoaded]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']}>
        <Img
          alt={''}
          src={src}
          layout="fixed"
          width={width}
          height={height}
          objectFit="cover"
          loading={'lazy'}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      { ! isLoaded && (
        <div className={styles['loading']}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default React.memo(Image);
