var express = require('express');

var router = express.Router();
var userApiController = require('../controllers/users');


// var session = require('express-session');

//API for sending Home users
router.get('/home', userApiController.getPowers);

router.post('/powers', function(req,res){
	console.log("Request is == " + req.body.stepCounts);
});

module.exports = router;