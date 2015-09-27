
var _ = require('lodash');
var async = require('async');
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
	console.log(req.body);
	Power.find({})
		 .exec( function (error,result){
		 	if(error){
		 		console.log('Encountered Error');
		 	}
		 	setHeaders(res);
		 	console.log("Sending a Sample Response");
		 	res.send(result);
		 });
};

exports.postPowers = function(req,res){
	
	console.log("Request" + req.body.stepCounts);
	var x = req.body.stepCounts;
	console.log("Posted == " + x)
	res.send(x);
};

// postPowers = ( function(){
// 	function postPowers(){}

// 	postPowers.prototype.postPowersNow = function(incoming, callback){
// 		console.log("StepCounts==" + incoming.stepCounts);
// 		callback({"status":"ok"});
// 	}
// })(); 

// module.exports = new postPowers();