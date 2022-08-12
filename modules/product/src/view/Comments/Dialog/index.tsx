
import React from 'react';

import Form from './Form';


interface IProps {
  data?: any;
  onSubmit(data: any): void;
}

function DialogOpinion({ data, onSubmit }: IProps) {
  return (
    <Form
      initialValues={{
        productUuid: data['productUuid'],
      }}
      onSubmit={onSubmit}
    />
  );
}

export default DialogOpinion;
