
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  className?: string;
  value: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  onChange(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
}


function DefaultCount({ value, disabled, minValue, maxValue, onChange }: IProps) {
  const prevButtonClassName = React.useMemo(() => cn(styles['button'], 'fa-solid fa-minus', {
    [styles['disabled']]: disabled,
  }), [disabled]);
  const nextButtonClassName = React.useMemo(() => cn(styles['button'], 'fa-solid fa-plus', {
    [styles['disabled']]: disabled,
  }), [disabled]);

  function handlePrev() {
    if (disabled) {
      return void 0;
    }
    const newValue = value - 1;
    if (minValue) {
      if (newValue < minValue) {
        return void 0;
      }
    }
    onChange(newValue);
  }

  function handleNext() {
    if (disabled) {
      return void 0;
    }
    const newValue = value + 1;
    if (maxValue) {
      if (newValue > maxValue) {
        return void 0;
      }
    }
    onChange(newValue);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['left']}>
        <span className={prevButtonClassName} onClick={handlePrev} />
      </div>
      <div className={styles['content']}>
        <span className={styles['value']}>{ value }</span>
      </div>
      <div className={styles['right']}>
        <span className={nextButtonClassName} onClick={handleNext} />
      </div>
    </div>
  );
}

DefaultCount.defaultProps = {
  minValue: 1,
  maxValue: 0,
};

export default DefaultCount;
