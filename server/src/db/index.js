/**
 * Created by anatoliybondar on 8/21/15.
 */
var CriticalError = require("../errors/index").classes.CriticalError;

var colors = require('colors');
var logger = require("verbose-console-log");

var mongoose = require('mongoose');
var config = require('../config/index');

logger.log("########", config, config.get("db:uri"), config.get("db"))

var options = {
    //server: {
    //    socketOptions: {
    //        socketTimeoutMS: 100,
    //        connectTimeoutMS: 100,
    //        noDelay: true
    //    }
    //}
};

//mongoose.createConnection('mongodb://localhost/tasker', options);
mongoose.connect(config.get("db:uri"), options);

var db = mongoose.connection;

//dbDomain.add(db);
//db.on('error', logger.error.bind(logger, 'connection error:'));

db.on('error', function(err) {
    logger.error("Db connection error:".red, err.message.red);

    if(err.message.match(/ECONNREFUSED/)) {
        throw new CriticalError("Try to run 'mongod --config YOUR_MONGODB_CONF' (/etc/mongodb.conf or something similar)".magenta);
    }
});

db.once('open', function callback() {
    // Соединение прошло успешно
    logger.log("Db connection was successful".green);
    //callback();
});

module.exports = mongoose;