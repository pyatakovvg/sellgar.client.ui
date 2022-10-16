
import { reduxForm } from 'redux-form';

import Component from './Component';


function validate(values: any) {
  const errors: any = {};

  if ( ! values['name']) {
    errors['name'] = 'Необходимо заполнить';
  }

  if ( ! values['phone']) {
    errors['phone'] = 'Необходимо заполнить';
  }
  else if ( ! /^\+\d{11}/g.test(values['phone'])) {
    errors['phone'] = 'Неверный формат';
  }

  return errors;
}


export default reduxForm({
  form: 'checkout',
  validate,
})(Component) as any;
