define(["dojo/_base/declare"], function(declare){
    //var controller = declare("tasksController", null, {
    //    doSomething : function() {
    //        console.log("asdf");
    //    }
    //});

    var module = declare(null, {
        doSomething : function() {
            console.log("asdf");
        },

        init : function() {
            console.log("init tasks module");
        }
    });

    return module;
});
