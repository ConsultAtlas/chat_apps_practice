//  Include our packages in our main server file
const express = require('express');
app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config/main');
const jwt = require('jsonwebtoken');

const port = 3000;

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Log requests to the console
app.use(morgan('dev'));

mongoose.connect(config.database);


// We will add a quick home page route so I can give a quick demonstration of what morgan does. 
// Add this next.


// Home route. We'll end up changing this to our main front end index later.
app.get('/', function(req, res) {  
    res.send('Relax. We will put the home page here later.');
  });

app.listen(port);
console.log('Your server is running on port '+ port +'.');