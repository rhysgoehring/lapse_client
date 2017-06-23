import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';

class SignUp extends Component {
  render() {
    const {handleSubmit, fields: { username, email, zip, password, passwordConfirm}} = this.props;
    
    return (
      <form>
        <fieldset className="form-group">
          <label>Username</label>
          <Field
            name="username"
            type="text"
            component="input"
            className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
            name="email"
            type="email"
            component="input"
            className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Zip Code</label>
          <Field
            name="zip"
            type="text"
            component="input"
            pattern="\d{5}-?(\d{4})?"
            className="form-control"
            />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            className="form-control" />
            {Field.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <Field
            name="passwordConfirm"
            type="password"
            component="input"
            className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  return errors;
}

SignUp = reduxForm({
  form: "signUp",
  fields: ['username','email', 'zip','password','passwordConfirm'], validate }
)(SignUp);

export default SignUp;