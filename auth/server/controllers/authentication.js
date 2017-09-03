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

			res.json({success: true});
		})
	});
	

	

	


}