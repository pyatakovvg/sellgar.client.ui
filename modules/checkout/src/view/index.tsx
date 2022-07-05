
import React from 'react';

import Form from './Form';

import styles from './@media/index.module.scss';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
  data: any;
}


function Checkout({ delivery, payments }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <Form delivery={delivery} payments={payments} onSubmit={() => {}} />
      </section>
    </section>
  );
}

export default Checkout;
