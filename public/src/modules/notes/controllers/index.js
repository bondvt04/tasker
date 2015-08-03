/**
 * @class NotesController
 */
class Controller {
    constructor(options) {
        this._modelPromise = options.model;
    }

    init() {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            //self._router = routerEngine;
            console.log(">>> NotesController.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while controller.init"));
            }
        });

        return promise;
    }
}

define([
    "../models/Note.js"
], function(noteModel){
    var instance;

    return (function() {
        return (instance = (instance || (new Module({
            model: noteModel
        })).init()));
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