import axios from 'axios';
import {browserHistory} from 'react-router';
import {GET_USER_INFO} from './types';


const ROOT_URL = 'http://localhost:8080';

export function getUser(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/users/${id}`)
      .then((user) => {
        console.log(user)
      })
      .catch(() => {
        
      })
  }
}