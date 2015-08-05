/**
 * @class NotesIndexController
 */
class Controller {
    init() {
        var self = this;
        var promises = arguments;

        var promise = new Promise(function(resolve, reject) {

            Promise.all(promises).then(function(arrayOfResults) {
                var network = arrayOfResults[0];
                var noteModel = self._noteModel = arrayOfResults[1];

                self.actions = actions;
                console.log("> NotesIndexController.init()");

                resolve(self);
            }, function(err) {
                reject(err);
            });
        });

        return promise;
    }
}

var actions = {
    index: function(params, complete) {
        console.log("* notes.controller.index");
        complete();
    },

    add: function(params, complete) {
        console.log("* notes.controller.add");
        complete();
    },

    addfff: function(params, complete) {
        console.log("* notes.controller.addfff");
        complete();
    },

    addffff: function(params, complete) {
        console.log("* notes.controller.addffff");
        complete();
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