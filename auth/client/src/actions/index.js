import axios from 'axios';
import {browserHistory} from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import { SIGN_IN, ROOT_URL } from './config';

// signs the user in with a request to the server API
// handles server errors and saves a JWT token to localStorage
export function signinUser(email, password){

	// turned into in an object to match exact json request expected by the server
	let authObject = { email, password};

	// with redux thunk we can return a function to access the dispatch method of `react-redux`
	// this allows us to add logic before dispatching the action.object into the reducer
	 
	return function(dispatch){

		// submit email/password to the server
		axios.post(`${ROOT_URL}/${SIGN_IN}`, authObject)
		

		// if request is good..
		// chains the response after success
		.then(response =>{

			// update state to indicate user is authenticated
			// this is the power of redux thunk, we can pass actions into our store from within a function
			dispatch({type: AUTH_USER});
			
			// save the jwt token
			// saves our token into local storage to check authentication
			console.log(response.data)
			localStorage.setItem('token', response.data.token);

			// redirect to the route '/feature'
			browserHistory.push('/feature');


		})
		
		// if request is bad...
		// chains the response after error
		.catch(() =>{

			dispatch(authError('Bad Login info'));
		})
	}
}


export function signoutUser(){
	localStorage.removeItem('token');
	return { type: UNAUTH_USER};
}

export function authError(error){
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

