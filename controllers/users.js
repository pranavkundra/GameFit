
var _ = require('lodash');
var async = require('async');
var moment = require('moment');
var timezone = require('moment-timezone');
var Power = require('../models/Powers');

function setHeaders(res){
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Content-Type', "application/json");
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
}

/*Chinmay R :
*/
exports.getPowers = function(req,res){
	// var returnjson = {x:"p", y:"q"};
	Power.find({})
		 .exec( function (error,result){
		 	setHeaders(res);
		 	console.log("Sending a Sample Response");
		 	res.send(result);
		 });

	// setHeaders(res);
	
	// res.send(returnjson);
};
