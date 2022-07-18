
import React from 'react';
import MaskedInput from 'react-input-mask'

import cn from 'classnames';
import styles from './default.module.scss';


type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  mode?: TMode;
  value?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function PasswordInput({ className, mode, value, name, placeholder, autoFocus, disabled, onBlur, onFocus, onChange }: IProps): JSX.Element | null {
  const [isFocus, setFocus] = React.useState<boolean>(false);
  const [isPlaceholder, setPlaceHolder] = React.useState<boolean>(false);

  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['mode--default']]: mode === 'default',
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
  }, {
    [styles['in-focus']]: isFocus,
    [styles['disabled']]: disabled,
  }), [className, isFocus, disabled]);
  const inputClassName = React.useMemo(() => cn(styles['input']), []);

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    const target = event['target'] as any;
    setFocus(true);

    if (onFocus) {
      onFocus(target['value'].replace(/[^+\d]+/ig, ''));
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const target = event['target'] as any;
    setFocus(false);

    if (onBlur) {
      onBlur(target['value'].replace(/[^+\d]+/ig, ''));
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event['target'] as any;

    if (onChange) {
      onChange(target['value'].replace(/[^+\d]+/ig, ''));
    }
  }

  React.useEffect(() => {
    if ( !! placeholder) {
      setPlaceHolder( ! isFocus && ! value && !! placeholder);
    }
  }, [isFocus, placeholder, value]);

  return (
    <div className={wrapperClassName}>
      <MaskedInput
        className={inputClassName}
        mask={'+7 (999) 999-99-99'}
        value={value}
        name={name}
        autoFocus={autoFocus}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isPlaceholder && (
        <div className={styles['placeholder']}>{ placeholder }</div>
      )}
    </div>
  );
}

PasswordInput.defaultProps = {
  className: null,
  type: 'text',
  mode: 'default',
  value: '',
  name: '',
  placeholder: '',
  autoFocus: false,
  disabled: false,
};

export default PasswordInput;
