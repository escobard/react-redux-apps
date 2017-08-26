import { FETCH_USERS } from '../actions/types';

export default function (state = [], action){
	switch (action.type) {
		case FETCH_USERS:
			// again this takes the current state, and adds the payload to the state
			return [...state, ...action.payload];
	}

	return state;
}