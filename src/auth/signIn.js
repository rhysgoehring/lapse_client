import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class SignIn extends Component {
  
  handleFormSubmit({username, password}) {
    this.props.signinUser({username, password})
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
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
      <div className="signInMain">
        <div className="container signInMain">
          <header>
            <h1 className ="text-center lapseLogo">
              L A P S E
            </h1>
          </header>
          <section />
          <br />
          <br />
          <article>
            <div className="container">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="row">
                  <fieldset className="form-group col-md-6">
                    <label className="rhysLbl">Username: </label>
                    <Field
                      name="username"
                      type="text"
                      component="input"
                      className="form-control rhysField" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label className="rhysLbl">Password: </label>
                    <Field
                      name="password"
                      type="password"
                      component="input"
                      className="form-control rhysField" />
                  </fieldset>
                  {this.renderAlert()}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <button action="submit" className="rhysBtn">Sign In</button>
                    </div>
                    <div className="col-md-6">
                      <Link className="rhysBtn" to="/signup">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </article>
        </div>
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