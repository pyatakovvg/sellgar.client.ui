
import React from 'react';
import getConfig from 'next/config';

import Item from './Item';

import styles from './@media/index.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Paging({ meta }: any) {
  const rows = meta['totalRows'];
  const pages = Math.ceil(rows / Number(process.env['TAKE_PRODUCTS']));

  if (pages <= 1) {
    return null;
  }

  const array: Array<any> = Array(pages).fill(0, 0, pages);

  return (
    <section className={styles['wrapper']}>
      {array.map((page, index: number) => (
        <Item key={index} page={index + 1} />
      ))}
    </section>
  );
}

export default Paging;
