var _ = require("lodash"),
    passport = require("passport"),
    localUser = require("./passport/localUser"),
    User = require("../models/User");
module.exports = function(e) {
    e.serializeUser(function(e, o) {
        console.log("Serialize"), o(null, e.id)
    }), e.deserializeUser(function(e, o) {
        console.log("Deserialize"), User.findById(e, function(r, l) {
                    e && o(e), r ? o(null, r) : o(null)
                })
            })
        })
    }), e.use("user-login", localUser)
}