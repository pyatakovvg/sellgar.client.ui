
import { Header } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  description: string;
}

function Description({ description }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Описание</Header>
      </div>
      <div className={styles['content']} dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  );
}

export default Description;