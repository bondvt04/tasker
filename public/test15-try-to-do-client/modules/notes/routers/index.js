define([
    "dojo/_base/declare"
], function(declare){
    var routerClass = declare(null, {

        _routes : {
            "/notes": function () {
                console.log("> route /notes");
            },
            "/notes/add" : function() {
                console.log("> route /notes/add");
            }
        },

        init : function(router) {

            if(router) {
                router.addRoutes(this._routes)
            }

            console.log("init notes router");
        }
    });

    return routerClass;
});