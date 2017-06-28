import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropDown, MenuItem, Row, Col} from 'react-bootstrap';

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

      <Navbar fluid collapseOnSelect>
          <Col md={3} lg={3} lgOffset={1} sm={4}>
            <Nav>
              <NavItem eventKey={1}>
                <Link to="/newLapse">New Lapse</Link>
              </NavItem>
            </Nav>
          </Col>
          <Col md={4} lg={2} lgOffset={1} sm={4}>
            <Navbar.Brand>
              <Link to='/dashboard'>Lapse</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Col>
        <Navbar.Collapse>
          <Col md={3} lg={3} lgPush={2} sm={4}>
            <Nav>
              <NavItem eventKey={1} href="#"><Link to="/profile"><img className="navbar-link" src={this.props.profilePic}/></Link></NavItem>
              {/* <NavItem eventKey={2} href="#">Link Right</NavItem> */}
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Navbar>
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
        email: state.auth.email
        
      }
    )
  }
  

  export default connect(mapStateToProps)(Header);
