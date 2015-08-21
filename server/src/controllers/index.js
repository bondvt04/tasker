var Node = require("../models/Node");
var Promise = require("promise");

class Controller {

    __beforeAction() {

    }

    __afterAction(next) {
        next();
    }

    doAction(actionName, args) {
        var functionName = "_"+actionName+"Action";
        var self = this;
        var next = args[2];

        if(this[functionName] && "function" === typeof this[functionName]) {
            this.__beforeAction();

            // fill with arguments as is (not as array)
            var actionPromise = this[functionName](...Array.prototype.slice.call(args));

            actionPromise.then(function(result) {
                self.__afterAction(next);
            }).catch(function(err) {
                console.error(err);
            });
        }
    }

    _indexAction(req, res, next) {
        var hello = new Node({
            content: 'Hello, World!'
        });

        var savePromise = new Promise(function(resolve, reject) {
            hello.save(function (err, node) {
                if (err) reject(err);

                console.log("###", node.content);
                resolve(node);
            });
        });

        var findPromise = new Promise(function(resolve, reject) {
            Node.find(function (err, nodes) {
                if (err) reject(err);
                console.log(nodes);

                resolve(nodes);
            });

            //Kitten.find({ name: /^Fluff/ }, callback);
        });

        return new Promise(function(resolve, reject) {
            Promise.all([
                savePromise,
                findPromise
            ]).then(function(results) {
                resolve();
            }).catch(function(err) {
                reject();
            });
        });
    }
}

module.exports = new Controller();
