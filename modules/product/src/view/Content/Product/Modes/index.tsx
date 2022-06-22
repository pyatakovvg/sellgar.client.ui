
import { Button } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  modes: Array<any>;
}


function Modes({ modes }: IProps): JSX.Element {
  const [active, setActive] = React.useState(() => modes.find(item => item['isTarget']));

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {modes.map((item) => (
          <Item key={item['uuid']} {...item} isActive={active['uuid'] === item['uuid']} onChange={() => setActive(item)} />
        ))}
      </div>
      {active && (
        <div className={styles['controls']}>
          <Button>{ `${numeral(active?.['price'] ?? 0).format()} ${active['currency']['displayName']}` }</Button>
        </div>
      )}
    </div>
  );
}

export default Modes;
