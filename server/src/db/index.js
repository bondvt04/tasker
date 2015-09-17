/**
 * Created by anatoliybondar on 8/21/15.
 */

// colored console.log()
var colors = require('colors');

var domain = require('domain').create();
var mongoose = require('mongoose');

domain.on('error', function(er) {
    console.log('--- Oh no, something wrong with DB');
});

domain.run(function() {
    mongoose.connect('mongodb://localhost/tasker');
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    // Соединение прошло успешно
    console.log("Db connection was successfull".green);
    //callback();
});

module.exports = mongoose;