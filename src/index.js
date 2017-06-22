import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// import requireAuth from './components/hoc/require_auth';
import reducers from './reducers/index';
import App from './components/app';
import Resources from './components/resources';
// Step 1 Create the store


const store = createStore(reducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="resources" component={Resources} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();