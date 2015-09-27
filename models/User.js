// var bcrypt = require('bcrypt-nodejs');
// var crypto = require('crypto');
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  name: { type: String},
  cyclingDist: {type: Number},
  climbingDist: {type: Number},
  heartRate : {type: Number},
  stepsCount: {type: Number},
  games:[{type: mongoose.Schema.Types.ObjectId, ref:'game'}],
  friends: [{type: mongoose.Schema.Types.ObjectId, ref:'user'}]
});

/*/**
 * Password hash middleware.
 */

/*
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
*/
/**
 * Helper method for validating user's password.
 */

/*userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
*/

/**
 * Helper method for getting user's gravatar.
 */

/*userSchema.methods.gravatar = function(size) {
  if (!size) size = 200;
  if (!this.email) return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};
*/
module.exports = mongoose.model('User', userSchema, 'user');
