var User  = require('../models/user');

exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
};