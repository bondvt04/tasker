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

                try {
                    template = new EJS({url: '/modules/notes/views/index/index.ejs'})
                } catch(e) {
                    console.error(e);
                    debugger;
                }


                //data = {
                //    notes : [
                //        {text : "hello"},
                //        {text : "world"},
                //        {text : "lol"}
                //    ]
                //}
                //
                //html = new ejs({url: '/modules/notes/views/index/index.ejs'}).render(data);
                //document.getElementById("content").innerHTML = html;
            },

            add : function() {
                console.log(">> notes.controller.actions.add");
            }
        }
    });

    return controllerClass;
});