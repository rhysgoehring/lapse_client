import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropDown, MenuItem, Row, Col} from 'react-bootstrap';

class NavBar extends Component {
  
  render() {
    
    if (!this.props.authenticated){
      return (
        <div></div>
      )
    }
    
    return (

      <Navbar collapseOnSelect>
          <Col md={3} lg={3} lgOffset={1} sm={4}>
            <Nav>
              <NavItem eventKey={1}>
                <Link to="/newLapse">New Lapse</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/uploadVideo">New Lapse</Link>
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
              <NavItem eventKey={1}><Link to="/profile"><img className="navbar-link" src={this.props.profilePic}/></Link></NavItem>
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
  

  export default connect(mapStateToProps)(NavBar);
