var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var express = require('express');
var logger = require('verbose-console-log');

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        cluster.fork();
    });
} else {

    var app = express();

    app.use("/api", function(req, res, next) {
        logger.log("qwer");
        res.send("asdf");
        process.exit(1);
    });

    http.createServer(app).listen(7777, function(){
        logger.log('Express server listening on port ' + 7777);
    });
}