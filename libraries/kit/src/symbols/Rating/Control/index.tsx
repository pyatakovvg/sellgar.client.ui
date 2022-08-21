
import React from 'react';

import Point from './Point';

import styles from './default.module.scss';


interface IProps {
  value: number;
  children?: string;
}


function Control({ value, children }: IProps) {
  const [selectedValue, setSelectedValue] = React.useState<number>(value);

  function handleClick(value: number) {
    setSelectedValue(value);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['label']}>
        { children }
      </div>
      <div className={styles['content']}>
        <Point value={selectedValue} index={1} onClick={handleClick} />
        <Point value={selectedValue} index={2} onClick={handleClick} />
        <Point value={selectedValue} index={3} onClick={handleClick} />
        <Point value={selectedValue} index={4} onClick={handleClick} />
        <Point value={selectedValue} index={5} onClick={handleClick} />
      </div>
    </div>
  );
}

export default React.memo(Control);
