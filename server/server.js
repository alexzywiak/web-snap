/*jslint node: true */
'use strict';

var morgan = require('morgan'); // used for logging incoming request
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var ParseServer = require('parse-server').ParseServer;


module.exports = function(app, express) {

  if(process.env.NODE_ENV === 'dev'){
    app.use(morgan('dev'));
  }

  if(process.env.NODE_ENV === 'dev'){
    app.options('*', function(req, res){
      res.sendStatus(200);
    });
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  var api = new ParseServer({
    databaseURI: "mongodb://localhost/websnap",
    //cloud: '/home/myApp/cloud/main.js', // Provide an absolute path 
    appId: 'myid',
    masterKey: 'keyedup', // Keep this key secret! 
    //fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:3000/parse'
  });

  app.use('/parse', api);


  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
});

};
