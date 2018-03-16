import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/requireAuth';
import Welcome from './components/welcome'

import reducers from './reducers';

import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//this grabs our token
const token = localStorage.getItem('token');

// if the user has a token, dispatch authentication action type
// this section could be refactored into the ./utils.js file at a later date
if (token) {
	store.dispatch({type: AUTH_USER});
}


ReactDOM.render(
  <Provider store={store}>
	  <Router history={browserHistory}>
	  	<Route path="/" component={App}>
	  		<IndexRoute component={Welcome}/>
	  		<Route path="signin" component={SignIn}></Route>
	  		<Route path="signout" component={SignOut}></Route>
	  		<Route path="signup" component={SignUp}></Route>
	  		<Route path="feature" component={RequireAuth(Feature)}></Route>
	  	</Route>
	  </Router>
  </Provider>
  , document.querySelector('.container'));
