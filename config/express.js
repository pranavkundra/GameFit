/**
 * Module dependencies.
 */

var express = require('express');
// var fs = require('fs');
var bodyParser = require('body-parser');

/*Compression Middleware DFlate and Gzip - 
Serving HTML/CSS/JS {Client Side} Assets*/
var compress = require('compression');

/* Express Session*/
var session = require('express-session');


/*Lusca - Web Application Security 
  Dependent on Express and Express-Session
*/
/*var lusca = require('lusca');*/

/*Handling Multipart Form data - "multipart/form-data"
Build on top of Busyboy. Dependent on Express*/
/*var multer = require('multer');*/

// var cookieParser = require('cookie-parser');

/*Lodash
JavaScript utility library delivering consistency, 
modularity, performance
Extra Features on Top of Underscore.JS
https://lodash.com/ , https://www.npmjs.com/package/lodash
*/
var _ = require('lodash');

//Logging HTTP Requests to Server
//var logger = require('./logger.js');

//require('morgan');

/*HTTP verbs such as PUT or DELETE in places 
where the client doesn't support it.*/
/*var methodOverride = require('method-override');*/

/*Express-Flash is extension of Flash without enabling to redirect Route Requests*/
// var flash = require('express-flash');

/** String validators and sanitizers*/
/*var expressValidator = require('express-validator');*/

/**Jade Assests as Compiled Javascript Funtions*/
var connectAssets = require('connect-assets');

var path = require('path');

/*MongoDB Session store for Express
Dependent on Express-Session*/
var MongoStore = require('connect-mongo')(session);

// var flash = require('connect-flash');

/* Winston - Logging*/
/*var winston = require('winston');*/

/* Helper Methods for Node.JS and other Stuff*/
// var helpers = require('view-helpers');

/*Configuration Control for Production Environment*/
//var config = require('config');

/*Secrets*/
var secrets = require('./secrets');

/*Morgan*/
//var FileStreamRotator = require('file-stream-rotator')
//var FileStreamRotator = require('file-stream-rotator')


/*Set Configuration Parameters*/
var pkg = require('../package.json');

//Set the Environment
var env = process.env.NODE_ENV || 'development';

/*Expose the Modules*/

module.exports = function (app) {

	/*Serve static content in HTTP via GZip Commpressed Format*/
	app.use(compress());
	
	app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

	/** By Defauly, searches for the views 
	Folder in the root directory*/
	app.set('views', path.join(__dirname, '../views'));

	/*Express Renders Default in HTML, use View Engine and Pass html as parameter
	For EJS modules*/
	app.set('view engine', 'jade');

	/*Static Access on the Public Domain*/
	// app.use('/',express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));
	// app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));
	/** By Defauly, searches for the views 
	Folder in the root directory*/
	// app.set('views', path.join(__dirname, '../views'));
	// Express Renders Default in HTML, use View Engine and Pass html as parameter
	// For EJS modules
	// app.set('view engine', 'ejs');
	// app.engine('.html', require('ejs').renderFile);
/*
	app.get('/', function(req, res) {
    	res.redirect('/home');
	});*/


	// app.use(app.router);

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	// app.use(multer({ dest: path.join(__dirname, 'uploads') }));

	/*Express Validator*/
	// app.use(expressValidator());

	/*HTTP Override*/
	// app.use(methodOverride());
	// app.use(cookieParser());

	/*Session Management*/
	app.use(session({
	  resave: true,
	  saveUninitialized: true,
	  secret: secrets.sessionSecret,
	  store: new MongoStore({ url: secrets.db.mongo, autoReconnect: true })
	}));

	
	/*Express-Flash*/
	// app.use(flash());

	/*Lusca Security Middleware*/
	/*app.use(lusca({
	  csrf: true,
	  xframekey:'SAMEORIGIN',
	  xssProtection: true
	}));*/

	/* Global user Settings for Local*/
	app.use(function(req, res, next) {
	  // console.log("Requested User" + req.user);
	    res.locals.user = req.user;
	    next();  
	});


	  // Use winston on production
	  // var log;
	  // if (env !== 'development') {
	  //   log = {
	  //     stream: {
	  //       write: function (message, encoding) {
	  //         winston.info(message);
	  //       }
	  //     }
	  //   };
	  // } else {
	  //   log = 'dev';
	  // }

	  //  Don't log during tests
	  // // Logging middleware
	  // if (env !== 'test') app.use(logger(log));


  // expose package.json to views
  	app.use(function (req, res, next) {
    	res.locals.pkg = pkg;
    	//res.locals.env = env;
    next();
  	});
};