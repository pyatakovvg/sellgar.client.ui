
import React from 'react';

import Form from './Form';

import styles from './@media/index.module.scss';


interface IProps {
  payment: Array<any>;
  delivery: Array<any>;
}


function Content({ delivery, payment }: IProps) {
  function handleSubmit() {

  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Form
          initialValues={{
            paymentCode: payment?.[0]?.['code'] ?? null,
            deliveryCode: delivery?.[0]?.['code'] ?? null,
          }}
          payment={payment}
          delivery={delivery}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Content;
