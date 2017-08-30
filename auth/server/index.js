// Main starting point of our application
// we can start our server up with `node index.js` in the command prompt
// no access to babel / webpack ES6 at this point, need to use ES5

// dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// App setup - all about getting express working the way we want to

// creates our instance of express
const app = express();


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