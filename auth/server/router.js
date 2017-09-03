const Authentication = require('./controllers/authentication');

module.exports = function(app){
	app.post('/signup', Authentication.signup);
};




/*
module.exports = function(app){
	
	// this handles get requests with express for our application 
	//to the assigned route, and passes a function after

	// req - is short for request, represents incoming http request
	// res - the response argument after the http request
	// next - the argument for what to do after the response has been handledhf
	app.get('/', function(req, res, next){

		// this sends whatever we want back as a response to the http request
		res.send(['water', 'phone', 'paper']);
	})
};
*/