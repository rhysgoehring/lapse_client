import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component {

  render() {

    if (!this.props.authenticated){
      return (
        <div></div>
      )
    }

    return (
      <Navbar style={{backgroundColor:"rgba(0,0,0,0.5)", border: 'none'}} inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link style={{color: '#86C232'}} to='/dashboard'>L A P S E</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav pullRight>
             <NavItem><Link style={{color: '#86C232'}} to="/profile">Profile</Link></NavItem>
             <NavItem><Link style={{color: '#86C232'}} to="/newLapse">New Lapse</Link></NavItem>
             <NavItem><Link style={{color: '#86C232'}} to={`/users/${this.props.userId}/lapses`}>My Lapses</Link></NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
   
        
        /* <Navbar fixedTop style={{color: 'rgba(255, 255, 255, .0)'}}>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <Link to="/newLapse">New Lapse</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/uploadVideo">New Lapse</Link>
          </NavItem>
        </Nav>
        <Navbar.Brand bsClass='pull-right'>
          <Link className='text-center' to='/dashboard'>Lapse</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to="/profile"><img className="navbar-link" src={this.props.profilePic}/></Link></NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar> */
        
        )
      }
      }
        
 function mapStateToProps(state) {
   return ({
     authenticated: state.auth.authenticated,
     userId: state.auth.userId,
     username: state.auth.username,
     profilePic: state.auth.profilePic,
     email: state.auth.email
   })
}

NavBar = connect(mapStateToProps, null)(NavBar)
export default NavBar