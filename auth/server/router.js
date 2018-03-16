const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// uses the `jwt` argument to utilize the token, and `session:false` to disable cookies
const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
	app.get('/', requireAuth, function(req, res){
		res.send({ message: 'super secret code is ABC123'});
	});
	app.post('/signin', requireSignin, Authentication.signin)
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