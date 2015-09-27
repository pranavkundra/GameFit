
var _ = require('lodash');
var async = require('async');
var Power = require('../models/Powers');


function setHeaders(res){
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Content-Type', "application/json");
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
}

exports.postPowers = function(req,res){
	console.log('I am here2222');
	console.log("Request" + req.body.stepCounts);
	var x = req.body.stepCounts;
	setHeaders(res);
	console.log("Posted == " + x)
	res.send(x);
};
