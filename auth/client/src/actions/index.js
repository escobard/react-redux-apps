import axios from 'axios';
import {browserHistory} from 'react-router';

import { SIGN_IN, ROOT_URL } from './types';

// this currently throws a 500 error when the user supplies the wrong email or password
export function signinUser(email, password){
	let test = { email, password}
	// with redux thunk we can return a function to access the dispatch method of `react-redux`
	// this allows us to add logic before dispatching the action.object into the reducer
	
	return function(dispatch){

		// submit email/password to the server
		axios.post(`${ROOT_URL}/${SIGN_IN}`, test)
		
		// chains the response after success
		.then(reponse =>{

			// if request is good..
			// update state to indicate user is authenticated
			// save the jwt token

			
			// redirect to the route '/feature'
			browserHistory.push('/feature');
		})
		
		// chains the response after error
		.catch(() =>{

			// if request is bad
			// show an error to the user

		})
		



	}



}