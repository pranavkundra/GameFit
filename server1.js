/**
Module Dependencies
*/

var express = require('express');

/*MongoDB Node.JS Connector*/
var mongoose = require('mongoose');

//NodeJS Error Handler
// var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');

/*PassportJS*/
/*var passport = require('passport');*/

/* Production Settings */
// /var config = require('config');

/**API keys and Passport configuration.*/
var secrets = require('./config/secrets');

/* SSL Required files*/
// var fs = require('fs');
// var https = require('https');
// var privateKey  = fs.readFileSync('sslcert/private-key.pem', 'utf8');
// var certificate = fs.readFileSync('sslcert/certificate.pem', 'utf8');
// var credentials = {key: privateKey, cert: certificate};


/** Create Express server.*/
var app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*** Express configuration.*/
app.set('port', process.env.PORT || 3000);
// app.set('httpsport', process.env.PORT || 4433);

// Bootstrap passport config
// require('./config/passport')(passport);

// Bootstrap application settings


// app.use(function(req, res, next) {
//   if (/api/i.test(req.path)) req.session.returnTo = req.path;
//   next();
// });

/**
 * Error Handler.
 */
// app.use(errorhandler());
// var env = process.env.NODE_ENV || 'Development';
// if (env == 'Development'){
//   // app.use(errorhandler({ dumpExceptions : true, showStack : true}));
// };

// if (env == 'test'){
//   // app.use(errorhandler({ dumpExceptions : true, showStack : true}));
// };

var server = null
// var httpsServer = null
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);
server = require('http').createServer(app);
// httpsServer = https.createServer(app);

pj = require('./package.json');

require('./core/bootstrap').isEnvSane(server,function(err, port){
  if(err){
    console.log(err);
    process.exit(1);
  }
  else
  {
    console.log("In Else of Bootstrap.coffee");
    server.listen((port), function(d,s){
      console.log("GameFir v"+pj.version+" listening on port %d in %s mode", port, app.settings.env);
      //console.log("Server's UID is now " + process.getuid());
    });

    // httpsServer.listen((4433), function(){
    //   console.log("GameFit Server v"+pj.version+" listening on port %d in %s mode",port, app.settings.env);
    // });

  }
});


module.exports = app;