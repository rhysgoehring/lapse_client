import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

const ROOT_URL = 'http://localhost:3001';

export function signinUser({ username, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/api/users`, { username, password })
    .then(response => {
      //if request is good
        // update state to indicate user is auth'd
        dispatch({type: AUTH_USER})
        // save the jwt token
        localStorage.setItem('token', response.data.token)
        // redirect to the route 'resources'
        browserHistory.push('/resources')
    })
    .catch(() => {
      //if request is bad show an error
      dispatch(authError('Bag Login Info'))
    })
     
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