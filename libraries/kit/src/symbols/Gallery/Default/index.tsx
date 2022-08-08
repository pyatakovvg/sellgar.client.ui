
import React from 'react';

import Empty from './Empty';
import Image from '../../Image';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  items: Array<string>;
}


function Gallery({ items }: IProps): JSX.Element {
  const [active, setActive] = React.useState<number>(0);

  function handlePrev() {
    let nextIndex = active - 1;
    if (nextIndex < 0) {
      nextIndex = items.length - 1;
    }
    setActive(nextIndex);
  }

  function handleNext() {
    let nextIndex = active + 1;
    if (nextIndex > items.length - 1) {
      nextIndex = 0;
    }
    setActive(nextIndex);
  }

  if ( ! items.length) {
    return (
      <div className={styles['wrapper']}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      {items.map((src: string, index: number) => (
        <div key={index} className={cn(styles['image'], { [styles['is-active']]: index === active })}>
          <Image src={src + '?size=160x160'} width={160} height={160} />
        </div>
      ))}
      {(items.length > 1) && (
        <div className={cn(styles['left'], 'fa-solid fa-angle-left')} onClick={handlePrev} />
      )}
      {(items.length > 1) && (
        <div className={cn(styles['right'], 'fa-solid fa-angle-right')} onClick={handleNext} />
      )}
    </div>
  );
}

export default React.memo(Gallery);
