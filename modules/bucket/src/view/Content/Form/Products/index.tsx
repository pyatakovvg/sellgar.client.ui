
import { Header } from "@library/kit";
import numeral from '@package/numeral';
import { selectData } from '@widget/bucket';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Product';

import styles from './@media/index.module.scss';


function Products() {
  const bucket = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>{ nounDeclension(bucket['count'], ['Выбран', 'Выбрано', 'Выбрано']) } { bucket['count'] } { nounDeclension(bucket['count'], ['товар', 'товара', 'товаров']) } на общую сумму { numeral(bucket['price']).format() } { bucket['currency']['displayName'] }</Header>
      </div>
      <div className={styles['content']}>
        {bucket['products'].map((item: any) => {
          return (
            <div key={item['product']['uuid']} className={styles['item']}>
              <Item bucketUuid={bucket['uuid']} {...item} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Products;
