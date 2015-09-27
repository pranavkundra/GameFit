var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  name: { type: String},
  score: {type: Number},
  cyclingDist: {type: Number},
  climbingDist: {type: Number},
  heartRate : {type: Number},
  stepsCount: {type: Number},
  caloriesBurned: {type:Number},
  games:[{type: mongoose.Schema.Types.ObjectId, ref:'game'}],
  friends: [{type: mongoose.Schema.Types.ObjectId, ref:'user'}]
});


module.exports = mongoose.model('User', userSchema, 'user');
