
var _ = require('lodash');
var async = require('async');
var moment = require('moment');
var timezone = require('moment-timezone');

function setHeaders(res){
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Content-Type', "application/json");
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
}

/*Chinmay R :
*/
exports.getUsers = function(req,res){
	var returnjson = {x:"p", y:"q"};
	setHeaders(res);
	console.log("Sending a Sample Response");
	res.send(returnjson);
};
