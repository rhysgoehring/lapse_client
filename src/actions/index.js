import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, GET_ALL_LAPSES, GET_LAPSE, GET_COMMENTS, POST_COMMENT} from './types';

const ROOT_URL = 'http://localhost:8080';

export function signinUser({ username, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/api/users/signin`, { username, password })
    .then(response => {
      //if request is good
        // update state to indicate user is auth'd
        // console.log('RESPONSE IS: ', response)
        const currentUser = response.data.currentUser
        const token = response.data.token
        dispatch(
          {
            type: AUTH_USER,
            payload: currentUser
          }
        )
        // save the jwt token
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', currentUser.id);
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
        localStorage.setItem('currentUser', currentUser);
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
  localStorage.removeItem('currentUser');
  return {
    type: UNAUTH_USER
  }
}

export function getAllLapses() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/lapses`)
    .then((response) => {
      console.log('getAllLapses reponse.data: ', response.data)
      dispatch(
        {
          type: GET_ALL_LAPSES,
          payload: response.data
        }
    )
  })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function getLapse(id) {
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/lapses/${id}`)
      .then((response) => {
        console.log('getLapse(id) reponse.data: ', response.data)
        dispatch({
          type: GET_LAPSE,
          payload: response.data
        })
      })
      .catch((error) =>{
        console.log(error);
      })
  }
}

export function getComments(id) {
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/lapses/comments/${id}`)
      .then((response) => {
        console.log('getComments(id) response.data: ', response.data)
        dispatch({
          type: GET_COMMENTS,
          payload: response.data
        })
      })
      .catch((error) =>{
        console.log(error);
      })
  }
}

export function postComment({id, body, commenter}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/lapses/comments/${id}`, {id, body, commenter})
      .then((response) => {
        console.log('response.data: ', response.data)
        let newPost = response.data
        
        dispatch({
          type: POST_COMMENT,
          payload: newPost
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
