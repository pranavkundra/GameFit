// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var Power = require('./models/Powers');
var User = require('./models/User');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
mongoose.connect('mongodb://admin:hackGT1234@ds051543.mongolab.com:51543/gamefit');
app.use(session({
	  resave: true,
	  saveUninitialized: true,
	  secret: 'gamefit',
	  store: new MongoStore({ url: 'mongodb://admin:hackGT1234@ds051543.mongolab.com:51543/gamefit', autoReconnect: true })
}));

app.get('/api/getUserDetails/:username', function(req,res){
	// console.log(req.body);
  console.log('Entered');
  var username = req.params.username;

	User.find({username: username})
		  .exec( function (error,result){
  		 	if(error){
  		 		console.log('Encountered Error');
  		 	}else{
          console.log("Result == " + result);
          console.log("Sending a User Response");
          res.send(result);  
        }
  		 	// setHeaders(res);
  		 	
		 });
});


app.post('/api/energyBurned',function(req,res){
   var username = "thechinmay";
   // if(req.headers['content-type'] == 'text/plain'){
   //    console.log("Content Plain Text Detected");
   //    var xyz = req.body;
   //    var abc =   JSON.stringify(xyz);
   //    console.log('String Converted == ' + abc);
   // }
   // app.use(bodyParser.text());
   var stringi =JSON.parse(JSON.stringify(req.body.stepsCount));
   console.log("Stringi == " + stringi.length);
   console.log("Number1" + parseInt(stringi[1],10));

    var calories=0  ; 
   // stringi = JSON.parse(stringi);

   for( var i =0 ; i< stringi.length; i++){
        calories = calories +  parseInt(stringi[i],10);
   }

   // console.log("Calories == " + calories);

   // console.log('Stringi == ' + stringi.toString());
   // console.log('Stringi == ' + JSON.stringify(stringi));
  User.update({username: username}, { '$set' : {'caloriesBurned' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});

app.post('/api/postPowers', function(req,res){
		var stepsCount = req.body.stepsCount;
		var heartbeat = req.body.heartbeat;

		console.log("Heyy"+stepsCount+heartbeat);

		res.send({"Success":"Congratulations"});
});


// routes will go here

// ====================================
// URL PARAMETERS =====================
// ====================================
// http://localhost:8080/api/users?id=4&token=sadsf4&geo=us
// app.get('/api/users', function(req, res) {
//   var user_id = req.param('id');
//   var token = req.param('token');
//   var geo = req.param('geo');  

//   res.send(user_id + ' ' + token + ' ' + geo);
// });

// // http://localhost:8080/api/1
// app.get('/api/:version', function(req, res) {
// 	res.send(req.params.version);
// });

// // parameter middleware that will run before the next routes
// app.param('name', function(req, res, next, name) {

// 	// check if the user with that name exists
// 	// do some validations
// 	// add -dude to the name
// 	var modified = name + '-dude';

// 	// save name to the request
// 	req.name = modified;

// 	next();
// });

// // http://localhost:8080/api/users/chris
// app.get('/api/users/:name', function(req, res) {
// 	// the user was found and is available in req.user
// 	res.send('What is up ' + req.name + '!');
// });

// // ====================================
// // POST PARAMETERS ====================
// // ====================================

// // POST http://localhost:8080/api/users
// // parameters sent with 
// app.post('/api/users', function(req, res) {
// 	var user_id = req.body.id;
// 	var token = req.body.token;
// 	var geo = req.body.geo;

// 	console.log("Heyy"+geo+token		);

// 	res.send(user_id + ' ' + token + ' ' + geo);
// });

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);