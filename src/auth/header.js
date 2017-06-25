import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
      <li className="nav-item" key={3}>
        <Link className="navbar-link" to="/signout">Sign Out</Link>
      </li>,
      <li className="nav-item" key={4}>
        <img className="navbar-link" src={this.props.profilePic} style={{ width: '5.280em'}} />
      </li>
    ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="navbar-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="navbar-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }
  
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Lapse</Link>
        
        <ul className = "nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
    }
  }

  function mapStateToProps(state) {
    return (
      {
        authenticated: state.auth.authenticated,
        userId: state.auth.userId,
        username: state.auth.username,
        profilePic: state.auth.profilePic,
        emaill: state.auth.email
        
      }
    )
  }
  

  export default connect(mapStateToProps)(Header);
