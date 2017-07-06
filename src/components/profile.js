import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {reduxForm, Field} from 'redux-form';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('Component Mounted');
  }
  
  render() {
    const {fields: {username, email, profilePic}} = this.props
    return (
      <div className="container">
        <form>
          <fieldset className="form-group">
            <label className='rhysLbl'>Username</label>
            <Field
              name="username"
              type="text"
              component="input"
              className="form-control rhysField"
              placeholder= {this.props.username}  />
          </fieldset>
          <fieldset className="form-group">
            <label className='rhysLbl'>Email</label>
            <Field
              name="email"
              type="email"
              component="input"
              className="form-control rhysField"
              placeholder= {this.props.email} />
          </fieldset>
          <div className="col-md-6">
            <label className='rhysLbl'>Current Profile Picture: </label>
            <img alt="Current Profile Picture" src={this.props.profilePic} style={{width: "400px"}}/>
          </div>
          <div className="col-md-6">
            <fieldset className="form-group">
              <label className="rhysLbl">Upload New Profile Pic: </label>
              <Field
                name="profilePic"
                type="file"
                component="input"
                className="form-control rhysField"
                value= '' />
            </fieldset>
          <div className='row'>
            <div className='col-md-6 pull-left'>
              <button className='rhysBtn'>Update Profile</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {...state.auth }
}

Profile = connect(mapStateToProps, null)(Profile)
Profile = reduxForm({
  form: 'updateProfile',
  fields: ['username, email, profilePic']
})(Profile)

export default Profile;