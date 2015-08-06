/**
 * @class NotesIndexController
 * @todo lazy load of models etc
 */
class Controller {
    init() {
        var self = this;
        var promises = arguments;

        var promise = new Promise(function(resolve, reject) {

            Promise.all(promises).then(function(arrayOfResults) {
                var network = arrayOfResults[0];
                var noteModel = self._noteModel = arrayOfResults[1];

                console.log("> NotesIndexController.init()");

                resolve(self);
            }, function(err) {
                reject(err);
            });
        });

        return promise;
    }

    __beforeAction() {

    }

    __afterAction(routerComplete) {
        routerComplete();
    }

    doAction(actionName, args) {
        var functionName = "_"+actionName+"Action";

        if(this[functionName] && "function" === typeof this[functionName]) {
            this.__beforeAction();

            // fill with arguments as is (not as array)
            this[functionName](...Array.prototype.slice.call(args));
            this.__afterAction(args[1]);
        }
    }

    _indexAction(routerParams, routerComplete) {
        console.log("* notes.controller.index");

        var model = {
            models: [
                {text: "hello"},
                {text: "world"},
            ]
        }

        var data = {
            model: model
        }

        //require("./loader!./dir/file.txt");

        console.log("asdfasdfasdf");

        ///Users/anatoliybondar/www/tasker/public/src/modules/notes
        require(["html!../views/index/lol.html"], function(html) {
            console.log("888", html);
            document.getElementById("content").innerHTML = html;
        });

        //require("html!/Users/anatoliybondar/www/tasker/public/src/modules/notes/views/index/lol.html", function(html) {
        //    console.log(html);
        //    document.getElementById("content").innerHTML = html;
        //});

        //html = new EJS({url: '/modules/notes/views/index/index.ejs'}).render(data);
        //document.getElementById("content").innerHTML = html;
    }
}

define([
    "../networks/index.js",
    "../models/Note.js"
], function(network, model){
    var instance;
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Controller()).init(...Array.prototype.slice.call(promises))));
    })();
});

//define([
//
//], function(){
//
//    var controllerClass = declare(null, {
//        /**
//         * Adding webcomponents, needed for this controller's views
//         * @private
//         */
//        _loadViewComponents : function() {
//            window.appendLinkToHead("modules/notes/views/webcomponents/note.html");
//        },
//
//        _beforeAction : function() {
//            this._loadViewComponents();
//        },
//
//        _afterAction : function() {
//
//        },
//
//        init : function() {
//            //debugger;
//            var self = this;
//            var promise = new Promise(function(resolve, reject) {
//
//                if (true) {
//                    resolve(self);
//                } else {
//                    reject(new Error("Error while notes.controller.init"));
//                }
//            });
//
//            return promise;
//        },
//
//        actions : {
//
//            index : function() {
//                this._beforeAction();
//                console.log(">> notes.controller.actions.index");
//
//                data = {
//                    notes : [
//                        {text : "hello"},
//                        {text : "world"},
//                        {text : "lol"}
//                    ]
//                }
//
//                html = new EJS({url: '/modules/notes/views/index/index.ejs'}).render(data);
//                document.getElementById("content").innerHTML = html;
//
//                this._afterAction();
//            },
//
//            add : function() {
//                this._beforeAction();
//                console.log(">> notes.controller.actions.add");
//                this._afterAction();
//            }
//        }
//    });
//
//    return controllerClass;
//});