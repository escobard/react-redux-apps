import axios from 'axios';
import {browserHistory} from 'react-router';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_CONTENT } from './types';
import { SIGN_IN, SIGN_UP, ROOT_URL } from './config'

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
			//console.log(response.data)
			localStorage.setItem('token', response.data.token);

			// redirect to the route '/feature'
			browserHistory.push('/feature');


		})
		
		// if request is bad...
		// chains the response after error
		.catch(error =>{

			dispatch(authError(error));
		})
	}
}

export function signupUser(email, password){
	let authObject = {email, password};

	return function(dispatch){

		// submit email/password to the server
		axios.post(`${ROOT_URL}/${SIGN_UP}`, authObject)
		

		// if request is good..
		// chains the response after success
		.then(response =>{

			// duplicating the signIn functionality, I should refactor this functionality into another function
			dispatch({type: AUTH_USER});
			localStorage.setItem('token', response.data.token);
			browserHistory.push('/feature');

		})
		
		// if request is bad...
		// chains the response after error
		.catch(error =>{

			dispatch(authError(error));
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

// this actually fetches the DATA from our server API - very useful for DB data
export function fetchMessage(){

	// using redux thunk
	return function(dispatch){

		// you can send header requests to each network request with axios like so
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
		.then(response => {
			dispatch({
				type: AUTH_CONTENT,
				payload: response.data.message
			})
		})
		.catch(error =>{
			console.log(error);
		})
	}
}