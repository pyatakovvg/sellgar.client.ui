
import { reduxForm } from 'redux-form';

import Component from './Component';


function validate(values: any): any {
  const errors: any = {};

  if ( ! ('description' in values)) {
    errors['description'] = 'Необходимо заполнить';
  }
  else if ( ! values['description']) {
    errors['description'] = 'Необходимо заполнить';
  }

  if ( ! ('author' in values)) {
    errors['author'] = 'Необходимо заполнить';
  }
  else if ( ! values['author']) {
    errors['author'] = 'Необходимо заполнить';
  }

  if ( ! ('email' in values)) {
    errors['email'] = 'Необходимо заполнить';
  }
  else if ( ! values['email']) {
    errors['email'] = 'Необходимо заполнить';
  }

  return errors;
}


export default reduxForm({
  form: 'opinion',
  validate,
})(Component as any);