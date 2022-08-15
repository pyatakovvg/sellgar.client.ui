
import { Button } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import Item from './Item';
import ItemOne from './ItemOne';

import styles from './@media/index.module.scss';


interface IProps {
  modes: Array<any>;
  onToCart(item: any): void;
}


function Modes({ modes, onToCart }: IProps): JSX.Element {
  const [active, setActive] = React.useState(() => modes.find(item => item['isTarget']));

  function handleToBucket() {
    onToCart(active);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['bucket']}>
        <div className={styles['price']}>
          <div className={styles['amount']}>{ numeral(active['price']).format() } { active['currency']['displayName'] }</div>
        </div>
        <div className={styles['button']}>
          <Button mode={'info'} onClick={handleToBucket}>Купить</Button>
        </div>
      </div>
      <div className={styles['content']}>
        {(modes.length > 1) &&  (
          modes.map((item) => (
            <Item key={item['uuid']} {...item} isActive={active['uuid'] === item['uuid']} onChange={() => setActive(item)} />
          )
        ))}
        {(modes.length === 1) &&  (
          <ItemOne {...active}>{ active['value'] }</ItemOne>
        )}
      </div>
    </div>
  );
}

export default Modes;
