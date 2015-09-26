var express = require('express');

var userApiController = require('../controllers/users');

var router = express.Router();
var session = require('express-session');

//API for sending Home users
router.get('/home', userApiController.getPowers);

module.exports = router;