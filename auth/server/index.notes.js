// Main starting point of our application
// we can start our server up with `node index.js` in the command prompt
// no access to babel / webpack ES6 at this point, need to use ES5

// dependencies
// nodemon is not shown here, but the nodemon dependency is used for updating the server on file changes
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

/* =============================================================
 DB Setup
=================================================================*/

// connects to our mongodb locally
// creates a database within mongodb with the name `auth`
mongoose.connect('mongodb://localhost:auth/auth');

/* =============================================================
 App setup - all about getting the express server working the way we want to
=================================================================*/

// creates our instance of express
const app = express();

// calls our server router 
const router = require('./router');

// these are refered as middlewares in react / redux
// essentially any incoming request needs to pass through these middlwares
// these two functions do something to the requests between passing them on 

// use is a method from express
// morgan is a logging library framework that logs requests within the console

// utilizes the CORS middleware to allow requests to the server from other domains
// this allows the CORS principle to be bypassed - you can also set rules for each domain you want to allow bypassing for
app.use(cors());


app.use(morgan('combined'));

// bodyParser passes any incoming requests into JSON, the '*/*' pseudo is accepting all requests no matter what the request is
app.use(bodyParser.json({type: '*/*'}));	



// passed our app through the server router
router(app);

/*=======================================================================
 Server setup - this is setting up our server to talk to the outside world
 ========================================================================*/

	// defines a port we want our server to run on within our local machine

	// sets our server PORT, utilizes the PORT environment variable if assigned, otherwise uses 3090
	const port = process.env.PORT || 3090;

	// creates our server with the instance of express
	// http is a native node library, handles low level http requests

	// essentially what happens here is:
	//1) we are creating an http server that knows how to receive http requests
	//2) anything that does come through forward it through to our express application
	const server = http.createServer(app);

	// telling the server to listen on the port we declared above
	server.listen(port);
	console.log('Server listening on:', port);