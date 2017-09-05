const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local strategy
// using usernameField here sets the 'email' db field to the username 
const localLogin = new LocalStrategy({usernameField: 'email'}, function(email, password, done){

	// verify this email and password, call done with the user
	// if it is the correct username and password
	// otherwise call done with false 
	User.findOne({email: email}, function(err, user){
		if (err) {return done(err)};
		if (!user) {return done(null, false)};

		// compare passwords - is password equal to user.password?
		user.comparePassword(password, function(err, isMatch){
			if (err) {return done(err);}
			if (!isMatch) {return done(null, false);}

			return done(null,user);
		})
	});
});

// setup options for JWT strategy
// tells our strategy where to look for our jwt token 
const jwtOptions = {

	// tell our strategy that whenever our request comes in with a passport handler 
	// look at the request header and look at 'authorization' to find the token
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

	// see if the user ID in the payload exsists in our database
	
	// otherwise call done without a user object
	User.findById(payload.sub, function(err, user){
		if (err) {return done(err, false);}

		// if it does, call 'done' with that user
		if (user) {
			done(null, user);
		} 

		// otherwise call done without a user object
		else{
			done(null, false);
		}

	})

})


// tell passport to use the strategy above
passport.use(jwtLogin);
passport.use(localLogin);