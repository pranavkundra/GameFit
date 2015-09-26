var mongoose = require('mongoose');

var powerSchema = new mongoose.Schema({
	power_id: {type:Number, unique: true},
	name:{type:String},
	description: { type: String},
	type: {type: String},
	/*date: {type: Date},*/
	tags: {type: [String]}, 
	special: {type: String},
	status: {type: String},
	ranking: {type: Number},
	stepCount: {type: Number}
});

module.exports = mongoose.model('Powers', powerSchema, 'powers');