import axios from 'axios';

import { FETCH_USERS } from './types';

const API = 'https://jsonplaceholder.typicode.com'

const EPOINT = 'users' 

// this an all ajax promises can be resolved automatically by utilizing the `redux-promises` library
// however knowing how to write middlewares is important for advanced JS development
export function fetchUsers(){
	const request = axios.get(`${API}/${EPOINT}`);
	
	return {
		type: FETCH_USERS,
		payload: request
	};
}