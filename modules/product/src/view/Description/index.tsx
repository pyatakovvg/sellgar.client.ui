
import { Editor } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  description: string;
}

function Description({ description }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <Editor value={description} />
      </div>
    </section>
  );
}

export default Description;
