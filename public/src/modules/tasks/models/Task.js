define(['../../../../../test12-dojo/bower_components/dojo/_base/declare'], function(declare){
    var Task = declare(null, {
        constructor: function(){
            console.debug("this is Task object #" + Task.counter++);
        }
    });

    Task.counter = 0;

    return Task;
});
