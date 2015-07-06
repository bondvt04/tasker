//define([
//    "./tasks/index",
//], function(tasks){
//    tasks.doSomething();
//});

//var hello = require([ "./modules/tasks/index.js" ]);

require([
    //"modules/tasks",
    "modules_notes"
], function(tasksModuleClass){


    var modules = arguments;

    /**
     * Init all modules
     */
    (function initModules() {
        for(var i in modules) {
            (function() {
                var module = new modules[i]();

                if(module && module.init && "function" === typeof module.init) {
                    module.init.bind(module)();
                }
            })();
        }
    })();




});


//http://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html#dojo-base-declare