
import React from 'react';

import Image from '../../../Image';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  activeIndex: number;
  items: Array<string>;
  onChange(index: number): void;
}


function Aside({ items, activeIndex, onChange }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {items.map((url: string, index: number) => (
        <div key={url} className={cn(styles['image'], { [styles['is-active']]: index === activeIndex })} onClick={() => onChange(index)}>
          <div className={styles['container']}>
            <Image src={url} width={46} height={46} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(Aside);
