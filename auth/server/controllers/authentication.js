const User = require('../models/user');

exports.signup = function(req,res,next){

	//this here shows the body of the request
	console.log(req.body);

	// these are the expected request properties
	const email = req.body.email;
	const password = req.body.password;

	//See if a user with the given email exists


	// if  a user with email does exsists, return an error

	// if a user with email does not exists create and save user record

	// respond to request indicating the user was created
}