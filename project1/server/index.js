// Importing Node Modules and Initializing Express
const express = require('express');
const app = express();
const logger = require('morgan');
const config = require('./config/main');

// Start the server
const server= app.listen(config.port);
console.log('Your server is running on ' + config.port + '.');

// Setting up middleware for all Express Requests
app.use(logger('dev')); // Log requests to API using Morgan

// Enable CORS from client-side
app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });