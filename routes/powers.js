var express = require('express');

var router = express.Router();
var userApiController = require('../controllers/users');


// var session = require('express-session');

//API for sending Home users
// router.get('/powers', userApiController.getPowers);

router.post('/powers', userApiController.postPowers);	
	// userApiController.postPowersNow(req.body, function (response) {
	// 	    console.log("Response == " + response)
	// 	    res.send(response);
	// 	  });

	// });
	// console.log("Request is == " + req.body.stepCounts);


module.exports = router;