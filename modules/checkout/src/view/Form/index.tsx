
import { reduxForm } from 'redux-form';

import Component from './Component';


export default reduxForm({
  form: 'checkout',
})(Component) as any;
