/**
 * Created by anatoliybondar on 8/21/15.
 */



var colors = require('colors');
var logger = require("verbose-console-log");

var dbDomain = require('domain').create();
var mongoose = require('mongoose');

dbDomain.on('error', function (er) {
    logger.log('--- Oh no, something wrong with DB'.red);
});

dbDomain.run(function () {
    mongoose.connect('mongodb://localhost/tasker');

    var db = mongoose.connection;

    dbDomain.add(db);
    //db.on('error', logger.error.bind(logger, 'connection error:'));

    db.on('error', function (err) {
        logger.error("Db connection error:".red, err.message.red);
        logger.log(dbDomain);
        dbDomain.exit();
    });

    db.once('open', function callback() {
        // Соединение прошло успешно
        logger.log("Db connection was successful".green);
        //callback();
    });
});

module.exports = mongoose;
//# sourceMappingURL=../db/index.js.map