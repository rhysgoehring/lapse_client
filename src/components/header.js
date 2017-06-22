import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Lapse</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
export default Header;