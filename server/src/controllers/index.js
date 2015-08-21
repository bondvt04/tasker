var Node = require("../models/Node");

class Controller {

    __beforeAction() {

    }

    __afterAction(next) {
        next();
    }

    doAction(actionName, args) {
        var functionName = "_"+actionName+"Action";

        if(this[functionName] && "function" === typeof this[functionName]) {
            this.__beforeAction();

            // fill with arguments as is (not as array)
            this[functionName](...Array.prototype.slice.call(args));
            this.__afterAction(args[2]);
        }
    }

    _indexAction(req, res, next) {
        var hello = new Node({
            content: 'Hello, World!'
        });

        hello.save(function (err, node) {
            if (err) return console.error(err);

            console.log("###", node.content);
        });

        Node.find(function (err, nodes) {
            if (err) return console.error(err);
            console.log(nodes);
        });

        //Kitten.find({ name: /^Fluff/ }, callback);
    }
}

module.exports = new Controller();
