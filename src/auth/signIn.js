import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class SignIn extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Username</label>
          <input className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

export default  SignIn;