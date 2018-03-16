// this is where we set up some low level instructions for mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// installs the bcrypt dependency for password encryptions
const bcrypt = require('bcrypt-nodejs');

// installs error handler util
const errorHandler = require('../utils/utils');

/*============================================
 Defines our model 
 ===========================================*/

	// we are defining our data here to enforce uniqueness
	// full list of behavior here: http://mongoosejs.com/docs/guide.html
	const userSchema = new Schema({
		email: { 

			// defines the data type
			type: String, 

			// defines uniqueness
			unique: true , 

			// turns to lowercase before checking data
			lowercase: true
		},
		password: String
	});

	// on save, encrypts password
	// the .pre() method does something with the scheme BEFORE a specific methos is invoked
	// in other words before saving a model run this function
	userSchema.pre('save', function(next){

		// this grabs userSchema, and sets it to the user const
		const user = this;

		// this generates a salt - then run callback
		bcrypt.genSalt(10, function(err, salt){
			errorHandler(err);

			// hash (or encrypt) our password using this salt
			bcrypt.hash(user.password, salt, null, function(err, hash){
				errorHandler(err);

				// if all goes well, overwrite the current user password, with encrypted password
				user.password = hash;

				// passes the next middleware before creating the model, if none found then it saves the model
				next();
			});

		})
	});

	// compares passwords
	// this creates the comparePasswords method to compare salted + hashed passwords
	userSchema.methods.comparePassword = function(candidatePassword, callback){
		
		bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
			if (err) {return callback(err);}

			callback(null, isMatch);
		});
	}

/*============================================
Create the model class
===========================================*/
 
	// this creates the schema into mongoose, and creates a collection named user
	const ModelClass = mongoose.model('user', userSchema);

	// export the model
	module.exports = ModelClass;