import { SAVE_COMMENT } from '../actions/types';

export default function (state=[], action) {
	switch(action.type) {
		case SAVE_COMMENT:
			// the ES5 equivalent of this is state.concat([action.payload])
			// this adds the payload onto the state array
			return [ ...state, action.payload ];

	}
	return state;	
}