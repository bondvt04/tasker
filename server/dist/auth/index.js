

var User = require('../models/user');
var Channel = require('../models/channel');
var jwt = require('jsonwebtoken');
var config = require('../../config');

exports.authenticate = function (req, res) {
    // find the user
    User.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret, {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token
                });
            }
        }
    });
};

exports.register = function (req, res) {
    User.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            var newUser = new User({
                name: req.body.name,
                password: req.body.password,
                admin: true
            });

            //add default channel to new user
            var channel = new Channel({
                link: 'http://rss.cnn.com/rss/edition_world.rss',
                name: 'edition_world',
                userId: newUser._id
            });

            //save
            newUser.save(function (err) {
                if (err) throw err;
                //save channel
                channel.save(function (err) {
                    if (err) throw err;
                });
                res.json({ success: true, message: 'User is created.' });
            });
        } else if (user) {
            return res.json({ success: false, message: 'Failed. This is user already exist.' });
        }
    });
};

exports.me = function (req, res) {
    res.json(req.decoded);
};

exports.home = function (req, res) {
    res.send('Hello! There is rss api.');
};

exports.isAuth = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                res.sendStatus(401);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
};
//# sourceMappingURL=../auth/index.js.map