"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = require("../models/Node");

var Controller = (function () {
    function Controller() {
        _classCallCheck(this, Controller);
    }

    _createClass(Controller, [{
        key: "__beforeAction",
        value: function __beforeAction() {}
    }, {
        key: "__afterAction",
        value: function __afterAction(next) {
            next();
        }
    }, {
        key: "doAction",
        value: function doAction(actionName, args) {
            var functionName = "_" + actionName + "Action";

            if (this[functionName] && "function" === typeof this[functionName]) {
                this.__beforeAction();

                // fill with arguments as is (not as array)
                this[functionName].apply(this, _toConsumableArray(Array.prototype.slice.call(args)));
                this.__afterAction(args[2]);
            }
        }
    }, {
        key: "_indexAction",
        value: function _indexAction(req, res, next) {
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
    }]);

    return Controller;
})();

module.exports = new Controller();
//# sourceMappingURL=../controllers/index.js.map