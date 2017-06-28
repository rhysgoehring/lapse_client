import React, {Component} from 'react';
import {Link} from 'react-router';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Lapse</h1>
        <div className="row" style={{marginTop:"16em"}}>
          <div className="col-md-6">
            <Link className="btn btn-success pull-right" to="/signin">Sign In</Link>
          </div>
          <div className="col-md-6">
            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;