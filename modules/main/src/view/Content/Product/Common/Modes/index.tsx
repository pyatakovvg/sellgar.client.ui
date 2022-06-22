
import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  item: any;
  modes: Array<any>;
  onChange(item: any): void;
}


function Modes({ item, modes, onChange }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {modes.map((mode) => (
        <Item key={mode['uuid']} {...mode} isActive={item['uuid'] === mode['uuid']} onChange={() => onChange(mode)} />
      ))}
    </div>
  );
}

export default Modes;
