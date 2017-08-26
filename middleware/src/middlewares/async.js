// this is generally the main structure of a middleware function
// a middleware is a function that does something with actions BEFORE they hit the reducers
export default function({dispatch}){
	return next => 
		action => {

			// if the action does not have a payload or the payload does not have a .then property
			// we don't care, send it on
			// its important to always add a condition for actions we do NOT want to target 
			if (!action.payload || !action.payload.then) {
				return next(action);
			}

			// makes sure the promise is resolved
			action.payload.then(response =>{

					// take whatever data our action contains, and replace the payload with the new response
					// effectively replacing the promise with our response data
					// the const here is unecessary, but added for clarity.
					const newAction = {...action, payload: response};

					// dispatches the action back to the beginning of the middleware chain
					dispatch(newAction);
				})
				.catch(err =>{
					console.log(err);
				})
		}
}

/* 

Writing this in es5 so its easier to read

export default function({dispatch}){

	// first funciton returns a next argument
	return function(next){
	
		// returns an action argument
		return function(action){

			// this action is any action being passed down the application
			console.log(action);

			// the next function sends the action argument to the NEXT middleware in the stack
			next(action);
		}
	}
}
*/