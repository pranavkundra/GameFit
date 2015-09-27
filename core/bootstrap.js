var CheckSanity, async, colors, config, flash, mongoose, secretsconf;
secretsconf = require("../config/secrets"), colors = require("colors"), async = require("async"), mongoose = require("mongoose"), port = require("../port"), flash = require("express-flash"), CheckSanity = function() {
    function e() {}
    return e.prototype.isEnvSane = function(e, n) {
        var o, r;
        env = (function() {
          switch (false) {
            case process.env.NODE_ENV !== 'production':
              return 'Production';
            case process.env.NODE_ENV !== 'test':
              return 'Test';
            default:
              return 'Development';
        }
    })();
        return console.log(("Initializing HackGT v" + pj.version + " on " + new Date).bold.green), console.log(("Checking if " + env + " is sane").green), o = function(e) {
            var n;
            return n = null, mongoose.connect(secretsconf.db.mongo), mongoose.connection.on("error", function() {
                return console.error("MONGO [FAIL]".bold.red), n = "Mongo connection failed"
            }), e(n)
        }, console.time("Waterfall"), async.waterfall([o], function(e) {
            return null != e ? console.log("Environment is not sane. Exiting.".red) : (console.time("Waterfall"), console.log("Environment is sane".green)), n(e, port)
        })
    }, e
}(), module.exports = new CheckSanity;