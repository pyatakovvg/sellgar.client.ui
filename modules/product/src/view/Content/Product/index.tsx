
import React from 'react';

import Title from './Title';
import Price from './Price';
import Products from './Products';
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
  const [product, setProduct] = React.useState(() => {
    return products.find((item: any) => item['isTarget']);
  });

  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Title name={name} brand={product['product']['brand']} />
      </div>
      <div className={styles['price']}>
        <Price uuid={uuid} price={product['product']['price']} currency={product['product']['currency']} />
      </div>
      <div className={styles['rating']}>
        <Comments comments={comments} externalId={externalId} group={group} category={category} />
      </div>
      {(products.length > 1) && (
        <div className={styles['products']}>
          <Products uuid={product['uuid']} products={products} onClick={setProduct} />
        </div>
      )}
    </div>
  );
}

export default Product;
