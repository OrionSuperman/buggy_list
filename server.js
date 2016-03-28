console.log('server.js')
//Standard express setup
var express=require('express'),
app = express(),
path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// gets static files from client as well as bower_components
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// gets mongoose
require('./server/config/mongoose.js');
//gets routes and then instantiates the routes function with our app
require('./server/config/routes.js')(app);
//allows us to integrate sockets

// server on!
app.listen(8000, function() {});
