import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import Signout from './containers/signout';
import Torrent from './containers/torrent';
import Auth from './containers/auth';
import RequireAuth from './containers/require-auth';

import reducers from './reducers';

const logger = createLogger();

// Tie the Redux store into local storage
const createPersistentStore = compose(
	persistState('auth', {key: 'dtor'})
)(createStore);

// Tie the middleware together with the store
const createStoreWithMiddleware = applyMiddleware(
	reduxThunk,
	logger
)(createPersistentStore);

require('./stylesheets/main.scss');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
			<Route name='home' path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path='login' component={Login}/>
				<Route path='signup' component={Signup} />
				<Route path='signout' component={Signout} />
				<Route path='torrent' component={RequireAuth(Torrent)} />
				<Route path='auth' component={Auth} />
			</Route>
    </Router>
  </Provider>
  , document.getElementById('application'));
