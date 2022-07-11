
import React from 'react';

import Context from '../context';
import Text from '../../../typography/Text';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  value?: any | null;
  disabled?: boolean;
  children: any;
}

function RadioElement({ value, disabled, children }: IProps) {
  const context = React.useContext<any>(Context);
  const markerClassName = cn(styles['marker'], {
    [styles['disabled']]: disabled,
    [styles['is-active']]: value === context['value'],
  });

  function handleClick() {
    if (value === context['value']) {
      return void 0;
    }
    context.onChange(value);
  }

  return (
    <div className={styles['wrapper']} onClick={handleClick}>
      <div className={styles['control']}>
        <span className={markerClassName} />
      </div>
      <div className={styles['label']}>
        <Text>{ children }</Text>
      </div>
    </div>
  );
}

export default RadioElement;
