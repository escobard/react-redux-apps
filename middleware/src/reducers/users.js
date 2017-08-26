import { FETCH_USERS } from '../actions/types';

export default function (state = [], action){
	switch (action.type) {
		case FETCH_USERS:
			// again this takes the current state, and adds the payload to the state

			// this is now a promise reponse, so to access our users we need to acess the .data array
			return [...state, ...action.payload.data];
	}

	return state;
}