import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Link} from 'react-router';

class SignUp extends Component {
  
  handleFormSubmit(values){
    console.log(values)
    // Call action creator to sign up the user
    this.props.signupUser(values);
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    const {handleSubmit, fields: { username, email, password }} = this.props;
    
    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              className="form-control" />
              {Field.error}
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign Up</button>
          <Link className="btn btn-primary" to="/signin">Sign In</Link>
        </form>
      </div>
      
    )
  }
}
// TODO Finish validation
// const validate = values => {
//   const errors = {}
//   return errors;
// }

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}
SignUp = connect(mapStateToProps, actions)(SignUp)
SignUp = reduxForm({
  form: "signUp",
  fields: ['username','email','password']})(SignUp);

export default SignUp;