
import React from 'react';
import Img from 'next/image';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  srcs: Array<string>;
}


function Image({ srcs }: IProps): JSX.Element {
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
      {(srcs.length > 1) && (
        <div className={styles['thumbs']}>
          {srcs.map((src: string, index: number) => (
            <div key={index} className={cn(styles['thumb'], {[styles['is-active']]: index === active })} onClick={() => setActive(index)}>
              <Img
                alt={''}
                src={src + '?width=64&height=64'}
                layout="fixed"
                width={64}
                height={64}
                objectFit="contain"
                loading={'lazy'}
              />
            </div>
          ))}
        </div>
      )}
      <div className={styles['content']}>
        {srcs.map((src: string, index: number) => (
          <div key={index} className={cn(styles['image'], { [styles['is-active']]: index === active })}>
            <Img
              alt={''}
              src={src + '?size=500x500'}
              layout="fixed"
              width={500}
              height={500}
              objectFit="contain"
              loading={'lazy'}
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
    </div>
  );
}

export default Image;
