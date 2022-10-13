
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

  const params = React.useMemo(() => {
    if (width && ! height) {
      return '?width=' + width;
    }
    else if ( ! width && height) {
      return '?height=' + width;
    }
    return '?width=' + width + '&height=' + height;
  }, [width, height]);

  return (
    <div className={styles['wrapper']}>
      <picture className={styles['image']}>
        <Img
          loader={({ src }: any) => src}
          alt={''}
          src={src + params}
          layout={'fixed'}
          width={width}
          height={height}
          objectFit={'contain'}
          unoptimized={false}
          loading={'lazy'}
          onLoadingComplete={() => setLoaded(true)}
        />
      </picture>
      { ! isLoaded && (
        <div className={styles['loading']}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default React.memo(Image);
