define([
    "dojo/_base/declare"
], function(declare){

    var controllerClass = declare(null, {
        init : function() {
            var self = this;
            var promise = new Promise(function(resolve, reject) {
                if (true) {
                    resolve(self);
                } else {
                    reject(new Error("Error while notes.controller.init"));
                }
            });

            return promise;
        },

        actions : {
            index : function() {
                console.log(">> notes.controller.actions.index");
            },

            add : function() {
                console.log(">> notes.controller.actions.add");
            }
        }
    });

    return controllerClass;
});