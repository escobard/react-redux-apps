const express = require('express'), 
http = require('http'),
bodyParser = require('body-parser'),
morgan = require('morgan'),
mongoose = require('mongoose'),
cors = require('cors');

// this needs to be changed to mlab db
mongoose.connect('mongodb://localhost:auth/auth');

const app = express(), 
router = require('./router');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));	

router(app);

const port = process.env.PORT || 3090,
server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);