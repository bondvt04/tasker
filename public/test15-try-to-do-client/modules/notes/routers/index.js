define([
    "dojo/_base/declare"
], function(declare){
    var routerClass = declare(null, {

        _controller : null,

        _routes : {

            //"/notes": function () {
            //    //console.log("> route /notes");
            //},
            //"/notes/add" : function() {
            //    //console.log("> route /notes/add");
            //}
        },

        init : function(mainRouter, mainNetwork, controller) {
            try {
                mainRouter.addRoutes({
                    "/notes": controller.actions.index,
                    "/notes/add": controller.actions.add
                })
            } catch(e) {
                console.error(e);
            }

            console.log("init notes router");
        }
    });

    return routerClass;
});