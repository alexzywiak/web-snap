'use strict';
var express     = require('express');

var app = express();

// configure our server with all the middleware and and routing
require('./server/server.js')(app, express);

// export our app for testing and flexibility, required by index.js

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Making Digital Magic on ' + port);

module.exports = app;