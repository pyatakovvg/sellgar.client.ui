
import React from 'react';

import Empty from './Empty';
import Image from '../../Image';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  items: Array<string>;
}


function Gallery({ items }: IProps) {
  const [active, setActive] = React.useState<number>(0);

  function handleChange(index: number) {
    setActive(index);
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
          <Image src={src} width={160} height={160} />
        </div>
      ))}
      {(items.length > 1) && (
        <div className={styles['aside']}>
          {items.map((src: any, index: number) => (
            <div key={src} className={cn(styles['dot'], { [styles['is-active']]: index === active })} onClick={() => handleChange(index)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(Gallery);
