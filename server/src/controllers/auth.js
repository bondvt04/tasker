var colors = require('colors');
var logger = require("verbose-console-log");
var User = require("../models/User");
var ApiControllerAbstract = require("./apiControllerAbstract");

class Controller extends ApiControllerAbstract {

    constructor() {
        super(arguments);
    }

    _loginAction(req, res) {
        logger.log("Controller.doAction1");
        return new Promise(function(resolve, reject) {



            User.findOne({
                name: req.body.name
            }, function(err, user) {
                if (err) throw err;
                if (!user) {
                    reject(new OpError("Authentication failed. User not found."));

                    res.json({
                        success: false,
                        message: ''
                    });
                } else if (user) {
                    // check if password matches
                    if (user.password != req.body.password) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {
                        // if user is found and password is right
                        // create a token
                        var token = jwt.sign(user, config.secret , {
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


            logger.log("Controller.doAction2");
            //resolve({a:"asdf777", b:"bsdf888"});

            //logger.log("###", Node);

            Node.find(function (err, nodes) {
                logger.log("######");
                if (err) reject(err);

                resolve(nodes);
            });

            //Kitten.find({ name: /^Fluff/ }, callback);
        });
    }
}

try {
    var controller = new Controller();
} catch(err) {
    logger.error(err);
    throw err;
}


module.exports = controller;
