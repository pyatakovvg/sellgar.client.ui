
import React from 'react';

import Form from './Form';

import styles from './@media/index.module.scss';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
  data: any;
}


function Checkout({ delivery, payments, data }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <Form
          initialValues={{
            deliveryCode: delivery[0]['code'],
            paymentCode: payments[0]['code'],
          }}
          data={data}
          delivery={delivery}
          payments={payments}
          onSubmit={(data: any) => console.log(data)}
        />
      </section>
    </section>
  );
}

export default Checkout;
