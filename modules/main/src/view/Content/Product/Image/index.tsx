
import { Text } from '@library/kit';

import React from 'react';
import Img from 'next/image';

// import Img from './Img';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  srcs: Array<string>;
  externalId: string;
}


function Image({ srcs, externalId }: IProps): JSX.Element {
  const [active, setActive] = React.useState(0);

  function handlePrev() {
    let nextIndex = active - 1;
    if (nextIndex < 0) {
      nextIndex = srcs.length - 1;
    }
    setActive(nextIndex);
  }

  function handleNext() {
    let nextIndex = active + 1;
    if (nextIndex > srcs.length - 1) {
      nextIndex = 0;
    }
    setActive(nextIndex);
  }

  if ( ! srcs.length) {
    return (
      <div className={styles['wrapper']}>
        <div className={styles['content']} />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>

      <div className={styles['content']}>
        {srcs.map((src: string, index: number) => (
          <div key={index} className={cn(styles['image'], { [styles['is-active']]: index === active })}>
            <Img
              alt={''}
              src={src}
              layout="fixed"
              width={124}
              height={124}
              objectFit="cover"
              loading={'lazy'}
              onLoadingComplete={() => console.log(123)}
            />
          </div>
        ))}
        {(srcs.length > 1) && (
          <div className={cn(styles['left'], 'fa-solid fa-angle-left')} onClick={handlePrev} />
        )}
        {(srcs.length > 1) && (
          <div className={cn(styles['right'], 'fa-solid fa-angle-right')} onClick={handleNext} />
        )}
      </div>

      <div className={styles['description']}>
        <Text type={'description'}>#{ externalId }</Text>
      </div>
    </div>
  );
}

export default Image;
