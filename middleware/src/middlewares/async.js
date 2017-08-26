// this is generally the main structure of a middleware function
export default function({dispatch}){
	return next => 
		action => {
			console.log(action);

			next(action);
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