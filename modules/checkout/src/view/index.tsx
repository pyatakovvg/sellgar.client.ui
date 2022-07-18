
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Empty from './Empty';

import { updateCart } from '../store/commands';
import { getCheckoutSuccessRequest, selectData } from '../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  payments: Array<any>;
  delivery: Array<any>;
  data: any;
}


function Checkout({ delivery, payments, data }: IProps) {
  const dispatch = useDispatch();
  const checkout = useSelector(selectData) as any;

  React.useEffect(() => {
    dispatch(getCheckoutSuccessRequest(data));
  }, []);

  function handleSubmit(data: any) {
    dispatch(updateCart({
      ...data,
    }));
  }

  if ( ! checkout || ! checkout['products'].length) {
    return (
      <Empty />
    );
  }

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
          onSubmit={handleSubmit}
        />
      </section>
    </section>
  );
}

export default Checkout;
