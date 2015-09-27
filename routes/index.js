var express = require('express');

var router = express.Router();
var userApiController = require('../controllers/users');
// var powers = require("../routes/powers");

// var session = require('express-session');

//API for sending Home users
// router.get('/powers', powers);
router.get('/', userApiController.getPowers);
// router.get('/', userApiController.postPowers);
// router.post('/powers', userApiController.postPowers);	
	// userApiController.postPowersNow(req.body, function (response) {
	// 	    console.log("Response == " + response)
	// 	    res.send(response);
	// 	  });

	// });
	// console.log("Request is == " + req.body.stepCounts);


module.exports = router;