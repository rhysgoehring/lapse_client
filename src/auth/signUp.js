import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Link} from 'react-router';
import {findDOMNode} from 'react-dom';
// import DropZoneInput from '../drop_zone/dropZoneInput';

const FILE_FIELD_NAME = 'file';

class SignUp extends Component {
  
  handleFormSubmit(values){
    console.log(values)
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
  
  showPreview() {
    if (!this.refs.picUrl){
      console.log('no pic url')
    } else {
    let picUrl = this.refs.picUrl.value
    return (
          <img src={picUrl}
            style={{
              width: "200px",
              height: "200px",
              alignContent: "center"
            }} />
    )
    }
  }
  render() {
    const {handleSubmit, showPreview, fields: { username, email, password, profilePicUrl}} = this.props;
    
    return (
      <div className="container">
        <header>
          <h1 className="text-center lapseLogo">
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
                <div className="col-md-6">
                  <fieldset className="form-group">
                    <label className="rhysLbl">Username</label>
                    <Field
                      name="username"
                      type="text"
                      component="input"
                      className="form-control rhysField" />
                  </fieldset>
                  <br />
                  <fieldset className="form-group">
                    <label className="rhysLbl">Email</label>
                    <Field
                      name="email"
                      type="email"
                      component="input"
                      className="form-control rhysField" />
                  </fieldset>
                  <br />
                  <fieldset className="form-group">
                    <label className="rhysLbl">Password</label>
                    <Field
                      name="password"
                      type="password"
                      component="input"
                      className="form-control rhysField" />
                      {Field.error}
                  </fieldset>
                  {this.renderAlert()}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <fieldset className="form-group">
                      <label className="rhysLbl">Profile Picture URL</label>
                      <Field
                        name="profilePicUrl"
                        ref = "picUrl"
                        type="url"
                        component="input"
                        className="form-control rhysField" />
                    </fieldset>
                    {this.showPreview()}
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <button action="submit" className="rhysBtn">Sign Up</button>
                </div>
                <div className="col-md-6">
                  <Link className="rhysBtn" to="/signin">Sign In</Link>
                </div>
                
                
              </div>
              
            </form>
          </div>
        </article>
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
  fields: ['username','email','password', 'profilePicUrl']})(SignUp);

export default SignUp;