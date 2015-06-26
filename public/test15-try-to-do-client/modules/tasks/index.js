define([
    "dojo/_base/declare",
    "dojo/dom",
    "app/dateFormatter"
], function(declare, dom, dateFormatter){
    return declare("tasks", null, {
        doSomething : function() {
            console.log("asdf");
        }
    });
});
