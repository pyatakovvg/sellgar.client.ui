
import { reduxForm } from 'redux-form';

import Component from './Component';


export default reduxForm({
  form: 'opinion'
})(Component as any);