import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router';

class SignOut extends Component {
  
  componentWillMount() {
    this.props.signOutUser();
  }
  
  render() {
    return (
      <div className="container">
        <div className="row" style={{marginTop: '15%', marginBottom: '15%'}}>
          <div className='col-md-12'>
            <h1 className='lapseLogo text-center'>L A P S E</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link className="rhysBtn pull-right" to="/signin">Sign In</Link>
          </div>
          <div className="col-md-6">
            <Link className="rhysBtn" to="/signup">Sign Up</Link>
          </div>
      </div>
    </div>
    )
  }
}

export default connect(null, actions)(SignOut);