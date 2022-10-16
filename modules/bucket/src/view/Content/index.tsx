
import { cleanBucket } from '@widget/bucket';

import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Form from './Form';

import { createCheckout } from '../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
}


function Content({ delivery, payments }: IProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleSubmit(data: any) {
    const result = await dispatch(createCheckout(data));
    if (result) {
      await router.push('/checkout/' + result['uuid']);
      dispatch(cleanBucket());
    }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Form
          initialValues={{
            paymentCode: payments?.[0]?.['code'] ?? null,
            deliveryCode: delivery?.[0]?.['code'] ?? null,
          }}
          payments={payments}
          delivery={delivery}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Content;
