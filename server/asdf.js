//
var express = require('express'),
    logger = require('verbose-console-log'),
    http = require('http');

var app = express();

app.use("/api/nodes", function(req, res, next) {
    logger.log("lol");

    process.exit(0);

    //try {
    //    throw new Error('asdf');
    //} catch(e) {
    //    logger.error();
    //}

});

http.createServer(app).listen(7777, function(){
    logger.log('Express server listening on port ' + '7777');
});