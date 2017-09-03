// this is where we set up some low level instructions for mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

/*============================================
Create the model class
===========================================*/
 
	// this creates the schema into mongoose, and creates a collection named user
	const ModelClass = mongoose.model('user', userSchema);

	// export the model
	module.exports = ModelClass;