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
var Game = require('./models/Game');

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


app.post('/api/stepsCount',function(req,res){
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
  User.update({username: username}, { '$set' : {'stepsCount' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});

/*Energy Burned*/
app.post('/api/energyBurned',function(req,res){
   var username = "thechinmay";
   // if(req.headers['content-type'] == 'text/plain'){
   //    console.log("Content Plain Text Detected");
   //    var xyz = req.body;
   //    var abc =   JSON.stringify(xyz);
   //    console.log('String Converted == ' + abc);
   // }
   // app.use(bodyParser.text());
   var stringi =JSON.parse(JSON.stringify(req.body.caloriesBurned));
   console.log("Stringi == " + stringi.length);
   console.log("Number1" + parseInt(stringi[1],10));

    var calories=0  ; 
   // stringi = JSON.parse(stringi);

   for( var i =0 ; i< stringi.length; i++){
        calories = calories +  parseInt(stringi[i],10);
   }
  User.update({username: username}, { '$set' : {'caloriesBurned' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});

/*ClimbDist*/
app.post('/api/climbingDist',function(req,res){
   var username = "thechinmay";
   // if(req.headers['content-type'] == 'text/plain'){
   //    console.log("Content Plain Text Detected");
   //    var xyz = req.body;
   //    var abc =   JSON.stringify(xyz);
   //    console.log('String Converted == ' + abc);
   // }
   // app.use(bodyParser.text());
   var stringi =JSON.parse(JSON.stringify(req.body.climbingDist));
   console.log("Stringi == " + stringi.length);
   console.log("Number1" + parseInt(stringi[1],10));

    var calories=0  ; 
   // stringi = JSON.parse(stringi);

   for( var i =0 ; i< stringi.length; i++){
        calories = calories +  parseInt(stringi[i],10);
   }
  User.update({username: username}, { '$set' : {'climbingDist' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});


/*heartrate*/
app.post('/api/heartRate',function(req,res){
   var username = "thechinmay";
   // if(req.headers['content-type'] == 'text/plain'){
   //    console.log("Content Plain Text Detected");
   //    var xyz = req.body;
   //    var abc =   JSON.stringify(xyz);
   //    console.log('String Converted == ' + abc);
   // }
   // app.use(bodyParser.text());
   var stringi =JSON.parse(JSON.stringify(req.body.heartRate));
   console.log("Stringi == " + stringi.length);
   console.log("Number1" + parseInt(stringi[1],10));

    var calories=0  ; 
   // stringi = JSON.parse(stringi);

   for( var i =0 ; i< stringi.length; i++){
        calories = calories +  parseInt(stringi[i],10);
   }
  User.update({username: username}, { '$set' : {'heartRate' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});


/*cyclingDist*/
app.post('/api/cyclingDist',function(req,res){
   var username = "thechinmay";
   // if(req.headers['content-type'] == 'text/plain'){
   //    console.log("Content Plain Text Detected");
   //    var xyz = req.body;
   //    var abc =   JSON.stringify(xyz);
   //    console.log('String Converted == ' + abc);
   // }
   // app.use(bodyParser.text());
   var stringi =JSON.parse(JSON.stringify(req.body.cyclingDist));
   console.log("Stringi == " + stringi.length);
   console.log("Number1" + parseInt(stringi[1],10));

    var calories=0  ; 
   // stringi = JSON.parse(stringi);

   for( var i =0 ; i< stringi.length; i++){
        calories = calories +  parseInt(stringi[i],10);
   }
  User.update({username: username}, { '$set' : {'cyclingDist' : calories}}, function(error,count){
    if(error){
        console.log("Error");
    }else{
      console.log("The data has been updated");
      res.send({"Success":"Congratulations"});
    }
  });
});


/*Game Play*/

app.post('/api/createGame', function(req,res){
    var initiate = req.body.initiate;
    var stringi = JSON.parse(JSON.stringify(req.body.username1));
    var username1 = stringi[0];
    var username2 = stringi[1];
    var player1,player2; 
    User.find({username:username1})
        .exec(function(error,result){
            player1 = result._id ;
            User.find({username:username2})
                .exec(function(err,result){
                  player2 = result._id;
                });
        }); 


    var game = new Game({
        initiate: initiate,
        turn: "player1",
        player1: player1,
        player2: player2,
        player1HealthPoints: 100,
        player1HealthPoints: 100,
        log:["Player 1 attacked Player 2 with 6 hours of Sleep"],
        status: "Active"
    });
    
    game.save(function(err,result){
      if(err){
        console.log("Error");
      }else{
        console.log("Updated");
        res.send({"Success" : "Congratulations"});
      }
    });
});


app.post('/api/postPowers', function(req,res){
		var stepsCount = req.body.stepsCount;
		var heartbeat = req.body.heartbeat;

		console.log("Heyy"+stepsCount+heartbeat);

		res.send({"Success":"Congratulations"});
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
