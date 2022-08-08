
import React from 'react';
import Link from "next/link";

import styles from './@media/index.module.scss';


interface IProps {
  group: any;
  category: any;
  externalId: string;
  children: any;
}


function Modes({ group, category, externalId, children }: IProps) {
  return (
    <Link href={'/catalog/' + group['code'] + '/' + category['code'] + '/' + externalId}>
      <a className={styles['wrapper']}>
        <p className={styles['title']}>{ children }</p>
      </a>
    </Link>
  );
}

export default Modes;
