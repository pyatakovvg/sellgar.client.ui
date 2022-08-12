
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TSize = 'small' | 'middle' | 'large';
type TType = 'submit' | 'button' | 'reset';
type TMode = 'primary' | 'danger' | 'success' | 'info';

interface IProps {
  className?: string,
  type?: TType,
  mode?: TMode,
  size?: TSize,
  children?: string | number | null,
  disabled?: boolean,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}


function OutlineButton({ className, type, size, mode, children, disabled, onClick }: IProps): JSX.Element | null {
  const buttonClassName = React.useMemo(() => cn(styles['button'], className, {
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
    [styles['mode--info']]: mode === 'info',
  }, {
    [styles['size--small']]: size === 'small',
    [styles['size--middle']]: size === 'middle',
    [styles['size--large']]: size === 'large',
  }), [className, size, mode, disabled]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (disabled) {
      return void 0;
    }

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >{ children }</button>
  );
}

OutlineButton.defaultProps = {
  className: null,
  type: 'button',
  size: 'middle',
  mode: 'primary',
  children: 'Button',
  disabled: false,
};

export default OutlineButton;
