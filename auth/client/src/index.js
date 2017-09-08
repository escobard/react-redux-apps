import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import Feature from './components/feature';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <Router history={browserHistory}>
	  	<Route path="/" component={App}>
	  		<Route path="signin" component={SignIn}></Route>
	  		<Route path="signout" component={SignOut}></Route>
	  		<Route path="feature" component={Feature}></Route>
	  	</Route>
	  </Router>
  </Provider>
  , document.querySelector('.container'));
