import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';


import './react_public/stylesheets/index.css';


import reducers from './reducers/index';

import App from './auth/app';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import SignIn from './auth/signIn';
import SignOut from './auth/signOut';
import SignUp from './auth/signUp';
import RequireAuth from './auth/hocRequireAuth';
import NewLapse  from './components/newLapse';
import Profile from './components/profile';
import ViewLapse from './components/viewLapse';
import UploadVideo from './flowplayer/uploadVideo';
import UserLapses from './components/userlapses';
import NewLapseTemp from './components/newLapseTemp';


import {AUTH_USER} from './actions/types';

const middleware = [reduxThunk, logger]
const store = createStore(reducers, applyMiddleware(...middleware))

const token = localStorage.getItem('token');


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        <Route path="signin" component={SignIn} />
        <Route path="signout" component={SignOut} />
        <Route path="signup" component={SignUp} />
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
        <Route path="newLapse" component={RequireAuth(NewLapseTemp)} />
        <Route path="profile" component={RequireAuth(Profile)} />
        <Route path="/lapses/:id" component={RequireAuth(ViewLapse)} />
        <Route path="uploadVideo" component={RequireAuth(UploadVideo)} />
        <Route path="/users/:id/lapses" component={RequireAuth(UserLapses)} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();