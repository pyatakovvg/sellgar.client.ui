
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
          <Image src={url} width={48} height={48} />
        </div>
      ))}
    </div>
  );
}

export default React.memo(Aside);
