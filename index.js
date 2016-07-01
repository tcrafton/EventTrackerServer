// Main starting pointing of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://EventAdmin:testpass@ds023664.mlab.com:23664/eventtrackdb');


// App Setup
// app.use registers the middleware for the application, middleware is something any
// incoming request will be passed into
app.use(morgan('combined'));                    // logging framework
app.use(bodyParser.json({ type: '*/*' }));      // Parse incoming request as json
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
