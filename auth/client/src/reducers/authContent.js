import { AUTH_CONTENT} from '../actions/types';

export default function authContent(state={}, action){
	switch(action.type){
		case AUTH_CONTENT:
			return {
				...state,
				data : action.payload
			}
	}
	return state;
}