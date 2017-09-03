// imports our user data model
const User = require('../models/user');

exports.signup = function(req, res, next){

	//this here shows the body of the request
	console.log(req.body);

	// these are the expected request properties, for the email and password body.properties
	const email = req.body.email;
	const password = req.body.password;

	//See if a user with the given email exists

	// findOne is a method whos first argument is the search criteria we want to use
	// second argument is a callback function, where we pass an error object, and the user that matches the search criteria
	User.findOne({email: email}, function(err, existingUser){

	});
	

	// if  a user with email does exists, return an error

	// if a user with email does not exists create and save user record

	// respond to request indicating the user was created
}