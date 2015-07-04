define(["dojo/_base/declare"], function(declare){

    var module = declare(null, {
        doSomething : function() {
            console.log("asdf");
        },

        init : function() {
            console.log("init notes module");
        }
    });

    return module;
});
