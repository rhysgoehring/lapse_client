import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

// import requireAuth from './components/hoc/require_auth';
import reducers from './reducers/index';
import App from './auth/app';
import Resources from './components/resources';
import Landing from './components/landing';
import './react_public/stylesheets/landing.css';
import SignIn from './auth/signIn';
import SignOut from './auth/signOut';
import SignUp from './auth/signUp';

const middleware = [reduxThunk, logger]


const store = createStore(reducers, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        <Route path="signin" component={SignIn} />
        <Route path="signout" component={SignOut} />
        <Route path="signup" component={SignUp} />
        <Route path="resources" component={Resources} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();