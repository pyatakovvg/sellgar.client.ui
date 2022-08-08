
import React from 'react';

import Item from './Item';
import ItemOne from './ItemOne';

import styles from './@media/index.module.scss';


interface IProps {
  item: any;
  modes: Array<any>;
  onChange(item: any): void;
}


function Modes({ item, modes, onChange }: IProps): JSX.Element {
  if (modes.length === 1) {
    return (
      <div className={styles['wrapper']}>
        <ItemOne { ...modes[0] } />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <span className={styles['label']}>Комплект:</span>
      </div>
      <div className={styles['content']}>
        {modes.map((mode) => (
          <div key={mode['uuid']} className={styles['item']}>
            <Item {...mode} isActive={item['uuid'] === mode['uuid']} onChange={() => onChange(mode)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modes;
