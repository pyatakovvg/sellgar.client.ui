
import React from 'react';

import Empty from './Empty';
import Aside from './Aside';
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
      <Empty />
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {items.map((src: string, index: number) => (
          <div key={index} className={cn(styles['image'], { [styles['is-active']]: index === active })}>
            <Image src={src} width={500} height={500} />
          </div>
        ))}
      </div>
      {(items.length > 1) && (
        <div className={styles['aside']}>
          <Aside activeIndex={active} items={items} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

export default React.memo(Gallery);
