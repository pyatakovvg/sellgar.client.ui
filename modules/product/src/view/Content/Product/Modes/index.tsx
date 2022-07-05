
import { Button } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import Item from './Item';

import styles from './@media/index.module.scss';


interface IProps {
  modes: Array<any>;
  onChange(data: any): void;
}


function Modes({ modes }: IProps): JSX.Element {
  const [active, setActive] = React.useState(() => modes.find(item => item['isTarget']));

  return (
    <div className={styles['wrapper']}>
      <div className={styles['bucket']}>
        <div className={styles['price']}>
          <div className={styles['amount']}>{ numeral(active['price']).format() } { active['currency']['displayName'] }</div>
        </div>
        <div className={styles['button']}>
          <Button>Купить</Button>
        </div>
      </div>
      <div className={styles['content']}>
        {(modes.length > 1) &&  (
          modes.map((item) => (
            <Item key={item['uuid']} {...item} isActive={active['uuid'] === item['uuid']} onChange={() => setActive(item)} />
          )
        ))}
        {(modes.length === 1) &&  (
          <Item {...active} isOne>{ active['value'] }</Item>
        )}
      </div>
    </div>
  );
}

export default Modes;
