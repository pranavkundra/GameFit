// var bcrypt = require('bcrypt-nodejs');
// var crypto = require('crypto');
var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  initiate: {type: Boolean},
  turn: {type: String},
  player1 : {type: mongoose.Schema.Types.ObjectId, ref:'user'},
  player2 : {type: mongoose.Schema.Types.ObjectId, ref:'user'},
  player1HealthPoints : {type :Number},
  player2HealthPoints : {type :Number},  
  log: { type: [String]},
  status:{type: String}
});

module.exports = mongoose.model('Game', gameSchema,'game');