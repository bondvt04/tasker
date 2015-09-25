/**
 * Created by anatoliybondar on 8/21/15.
 */



var colors = require('colors');
var logger = require("verbose-console-log");

var domain = require('domain').create();
var mongoose = require('mongoose');

domain.on('error', function (er) {
    logger.log('--- Oh no, something wrong with DB'.red);
});

domain.run(function () {
    mongoose.connect('mongodb://localhost/tasker');
});

var db = mongoose.connection;
//db.on('error', logger.error.bind(logger, 'connection error:'));

db.on('error', function (err) {
    logger.log("Db connection error:".red, err.message.red);
});

db.once('open', function callback() {
    // Соединение прошло успешно
    logger.log("Db connection was successful".green);
    //callback();
});

module.exports = mongoose;
//# sourceMappingURL=../db/index.js.map