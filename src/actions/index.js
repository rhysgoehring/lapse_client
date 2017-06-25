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
        
        console.log('RESPONSE IS: ', response)
        const currentUser = response.data.currentUser.id
        const token = response.data.token
        dispatch(
          {
            type: AUTH_USER,
            payload: currentUser
          }
        )
        // save the jwt token
        
        console.log('token:', token)
        
        console.log('currentUser:', currentUser)
        
        console.log(localStorage)
        localStorage.setItem('token', token);
        // localStorage.token = response.token
        // localStorage.setItem({'currentUser', currentUser});
        // console.log('token after storage:', token)
        // redirect to the route 'resources'
        browserHistory.push('/dashboard')
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
        
        const currentUser = response.data.currentUser.id
        const token = response.data.token
        dispatch(
          {
            type: AUTH_USER,
            payload: currentUser
          }
        )
        
 
        localStorage.setItem('token', token);
        browserHistory.push('/dashboard')
      
      
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
  return {
    type: UNAUTH_USER
  }
}