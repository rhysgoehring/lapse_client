import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

const ROOT_URL = 'http://localhost:8080';

export function signinUser({ username, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/api/users/signin`, { username, password })
    .then(response => {
      //if request is good
        // update state to indicate user is auth'd
        
        dispatch({type: AUTH_USER})
        // save the jwt token
        const token = (JSON.stringify(response.data.token)).valueOf()
        console.log('token:', token)
        
        const currentUser = JSON.stringify(response.data.user)
        console.log('currentUser:', currentUser)
        
        localStorage.setItem('token', token)
        localStorage.setItem('currentUser', currentUser);
        // localStorage.token = response.token
        // localStorage.setItem({'currentUser', currentUser});
        // console.log('token after storage:', token)
        // redirect to the route 'resources'
        browserHistory.push('/resources')
    })
    .catch(() => {
      //if request is bad show an error
      dispatch(authError('Bag Login Info'))
    })
     
  }
}

export function signupUser({username, password, email}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/users/signup`, { username, password, email})
      .then(response => {
        
        dispatch({type: AUTH_USER });
        
        const currentUser = JSON.stringify(response.data.user)
        const token = (JSON.stringify(response.data.token)).valueOf().valueOf();
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', currentUser);
        browserHistory.push('/feature')
      
      
      })
      
      .catch(response => dispatch(authError()))
        
      
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  return {
    type: UNAUTH_USER
  }
}