var express = require('express');

var router = express.Router();
var userApiController = require('../controllers/users');
var powerController = require('../controllers/powerController');
var session = require('express-session');
// var session = require('express-session');

//API for sending Home users
// router.get('/powers', userApiController.getPowers);

router.post('/', function (req,res){
	console.log('I am here2222');
	console.log("Request" + req.body.stepCounts);
	var x = req.body.stepCounts;
	// setHeaders(res);
	console.log("Posted == " + x)
	res.send(x);
});	
	// userApiController.postPowersNow(req.body, function (response) {
	// 	    console.log("Response == " + response)
	// 	    res.send(response);
	// 	  });

	// });
	// console.log("Request is == " + req.body.stepCounts);


module.exports = router;