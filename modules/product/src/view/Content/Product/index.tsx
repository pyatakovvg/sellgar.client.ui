
import React from 'react';

import Title from './Title';
import Price from './Price';
import Comments from './Comments';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  externalId: string;
  group: any;
  category: any;
  name: string;
  products: Array<any>;
  comments: any;
}


function Product({ uuid, name, comments, products, externalId, group, category }: IProps) {
  const [product] = React.useState(() => {
    return products.find((item: any) => item['isTarget']);
  });

  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Title name={name} brand={product['product']['brand']} />
      </div>
      <div className={styles['price']}>
        {products.map((product: any, index: number) => {
          return (
            <div key={product['product']['uuid']} className={styles['item']}>
              <Price type={index === 0 ? 'large' : 'small'} uuid={uuid} product={product} />
            </div>
          );
        })}
      </div>
      <div className={styles['rating']}>
        <Comments comments={comments} externalId={externalId} group={group} category={category} />
      </div>
    </div>
  );
}

export default Product;
