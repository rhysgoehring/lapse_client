import axios from 'axios';
import {browserHistory} from 'react-router';
import * as drive from 'flowplayer-drive';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.REACT_APP_FLOW_NAME;
const pass = process.env.REACT_APP_FLOW_PASS;

export function flowPlayerLogin() {
  return function(dispatch) {
    console.log('username', user);
    console.log('pass', pass);
    console.log('env', process.env.REACT_APP_FLOW_PASS);
    axios.post('https://drive.api.flowplayer.org/login', {username: 'rhysgoehring@gmail.com', password:'5#z693&Lo6Hu'})
      .then(response => {
        let authCode = response.data.user.authcode;
        
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }
}

export function uploadVideo(path) {
  drive.login('rhysgoehring@gmail.com', '5#z693&Lo6Hu').then(function(user) {
    console.log('Logged in as ' + user.email);
    return drive.uploadVideo(user.authcode, path, { title: 'My cool video' });
}).catch(function(err) {
    console.error('Something went wrong', err);
});
}