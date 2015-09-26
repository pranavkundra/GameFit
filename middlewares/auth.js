var secrets = require("../secrets.js"),
    url = require("url"),
    jwt = require("jwt-simple"),
    User = require("../../models/User"),
exports.isAuthenticated = function(e, n, s) {
    var o = e.body.token || e.session.jwttoken;
    if (o) try {
        {
            var r = jwt.decode(o, secrets.jwtTokenSecret);
            Date.now()
        }
        r.exp <= Date.now() && n.end("Access token has expired", 400), User.findOne({
            _id: r.iss
        }, function(o, r) {
            if (o) n.status(404).send({
                success: "Error Accessing Database"
            });
            else {
                if (null != r && void 0 != r) {
                    e.user = r; {
                        Date.now()
                    }
                    return s()
                }
                n.status(404).send({
                    success: "User Not Found"
                })
            }
        })
    } catch (i) {
        n.status(404).send({
            success: "Unable to verify user credentials. Please Login Again"
        })
    } else n.status(404).send({
        success: "Missing token value"
    })
}, exports.isVendorAuthenticated = function(e, n, s) {
    var o = e.body.token || e.session.jwttoken;
    if (o) try {
        {
            var r = jwt.decode(o, secrets.jwtTokenSecret);
            Date.now()
        }
        r.exp <= Date.now() && n.end("Access token has expired", 400), console.log("Vendor Authenticate  " + r.iss), vendorUser.findOne({
            _id: r.iss
        }, function(o, r) {
            if (o) e.flash("error", {
                msg: "Session Expired. Please login again to continue"
            }), n.redirect("/vendor/login");
            else {
                if (void 0 != r && null != r) {
                    console.log("Found Vendor"), e.user = r; {
                        Date.now()
                    }
                    return s()
                }
                e.flash("error", {
                    msg: "Session Expired. Please login again to continue"
                }), n.redirect("/vendor/login")
            }
        })
    } catch (i) {
        n.redirect("/vendor/login")
    } else n.redirect("/vendor/login")
}, exports.isAdminAuthenticated = function(e, n, s) {
    var o = e.body.token || e.session.jwttoken;
    if (o) try {
        {
            var r = jwt.decode(o, secrets.jwtTokenSecret);
            Date.now()
        }
        r.exp <= Date.now() && n.end("Access token has expired", 400), console.log("Admin Authenticate  " + r.iss), Admin.findOne({
            _id: r.iss
        }, function(o, r) {
            if (o) e.flash("error", {
                msg: "Session Expired. Please login again to continue"
            }), n.redirect("/admin/login");
            else {
                if (null != r && void 0 != r) {
                    console.log("Found Admin"), e.user = r; {
                        Date.now()
                    }
                    return s()
                }
                e.flash("error", {
                    msg: "Session Expired. Please login again to continue"
                }), n.redirect("/admin/login")
            }
        })
    } catch (i) {
        console.log("Error == " + i), n.redirect("/admin/login")
    } else n.redirect("/admin/login")
};