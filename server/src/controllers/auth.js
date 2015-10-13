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
