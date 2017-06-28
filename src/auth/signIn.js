import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class SignIn extends Component {
  
  handleFormSubmit({username, password}) {
    
    // Need to do something to log user in
    this.props.signinUser({username, password})
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      console.log('this.props:', this.props)
      console.log('this.props.errorMessage:', this.props.errorMessage)
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  
  render() {
    const {handleSubmit, fields: {username, password}} = this.props
    
    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Username: </label>
            <Field
              name="username"
              type="text"
              component="input"
              className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password: </label>
            <Field
              name="password"
              type="password"
              component="input"
              className="form-control" />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign In</button>
          <Link className="btn btn-primary" to="/signup">Sign Up</Link>
        </form>
      </div>
      
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error};
}

SignIn = connect(mapStateToProps, actions)(SignIn)
SignIn = reduxForm({
  form: "signIn",
  fields: ['username',
  'password']}
)(SignIn);

export default SignIn;

// export default reduxForm({
//   form: 'signin',
//   fields: ['username', 'password']
// }, null, actions)(SignIn);