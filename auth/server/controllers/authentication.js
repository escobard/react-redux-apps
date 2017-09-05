const jwt = require('jwt-simple');
const config = require('../config');
// imports our user data model
const User = require('../models/user');

function tokenForUser(user){

	// returns a token for the user, based on id. 
	// the .sub property of jwt is the subject of the token
	// the .iat property is the issued at time timestamp
	// for more on jwt go to : https://jwt.io/introduction/
	const timestamp = new Date().getTime();

	// encoded the token with the user.id and the timestamp so we know when the token was created
	return jwt.encode({sub:user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req, res, next){

	// use has already had their email and password auth'd
	// we just need to give them a token
	// this sends a token to the user
	res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next){

	//this here shows the body of the request
	console.log(req.body);

	// these are the expected request properties, for the email and password body.properties
	const email = req.body.email;
	const password = req.body.password;

	// checks for empty email and password
	// returns an empty response if either email or password is null
	// here is an excellent place for server side validation
	if (!email || !password) {
		return res.status(422).send({error: 'You must provide your email and your password'});
	}

	//See if a user with the given email exists

	// findOne is a method whos first argument is the search criteria we want to use
	// second argument is a callback function, where we pass an error object, and the user that matches the search criteria

	User.findOne({email: email}, function(err, existingUser){

		if (err) { return next(err)};

		// if  a user with email does exists, return an error
		if (existingUser) {

			// returns an HTTP response of 422 - unprossesable entity, couldnt process data
			// send an an object with an error object, with a property
			return res.status(422).send({error: 'Email is in use'});
		}

		// if a user with email does not exists create and save user record

		// utilizes the user model to create a new user model with the new user properties
		const user = new User({
			email: email,
			password: password
		});

		// respond to request indicating the user was created
		// the .save() being part of the `mongoose` library
		user.save(function(err){
			if (err) {return next(err)};

			res.json({token: tokenForUser(user)});
		})
	});


}