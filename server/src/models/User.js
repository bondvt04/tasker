/**
 * Created by anatoliybondar on 10/13/15.
 */

var mongoose = require('../db/index');

var schema = mongoose.Schema({
    auth_login: String,
    auth_password: String
});

var User = mongoose.model('Node', schema);

module.exports = User;