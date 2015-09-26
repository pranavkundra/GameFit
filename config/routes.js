var express = require("express"),
    routes = require("../routes/index");

module.exports = function(e) {
    e.use("/", routes),e.use(function(e, r, s, u) {
        return e.message && (~e.message.indexOf("not found") || ~e.message.indexOf("Cast to ObjectId failed")) ? u() : (console.log(e.stack), void s.status(500).render("500", {
            error: "Invalid JSON"
        }))
    }), e.use(function(e, r) {
        r.status(404).render("404", {
            url: e.originalUrl,
            error: "Not found",
            status: 404
        })
    })
};