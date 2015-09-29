"use strict"

var express = require('express'),
    logger = require('verbose-console-log'),
    http = require('http'),
    colors = require('colors');
var process = require('process');

var app = express();

process.on('uncaughtException', function(err) {

});

app.use(function() {

});




class OpError extends Error {
    constructor(message) {
        super(message);
        this.type = "operational";
        Error.captureStackTrace(this, this.constructor.name)
    }
}


app.use("/api/nodes", function(req, res, next) {
    //throw new Error("zlo");
    //require("asdfasdfasdf");
    //asdf.qwer();
    //throw ((new Error("asdf")).type = "operational")

    //throw (function() {
    //    var error = new Error("asdf");
    //    error.type = "operational";
    //    return error;
    //})();

    throw new OpError("zlo");
});

app.use(function(err, req, res, next) {
    logger.log(err instanceof OpError);
    logger.log(err.type);
    logger.log(err.name.green);
    logger.log("***************** dobro".magenta, err.message.red);
});

http.createServer(app).listen(7777, function(){
    logger.log('Express server listening on port ' + '7777');
});