
import { Input } from '@library/kit';
import { debounce } from '@helper/utils';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  onChange(value: string): void;
}

function normalize(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9а-яА-Я\s]+/, '')
    .replace(/\s{2,}/, ' ')
    .trim();
}


function Control({ onChange }: IProps) {
  const [state, setState] = React.useState('');
  const debounceChange = React.useCallback(debounce(onChange), []);

  function handleFocus(event: any) {
    const value = event['target']['value'];
    if (value) {
      onChange(normalize(value));
    }
  }

  return (
    <div className={styles['wrapper']}>
      <Input
        type={'search'}
        placeholder={'Искать товары...'}
        value={state}
        onFocus={handleFocus}
        onChange={(event: any) => {
          setState(event['target']['value']);
          debounceChange(normalize(event['target']['value']));
        }}
      />
    </div>
  );
}

export default Control;
