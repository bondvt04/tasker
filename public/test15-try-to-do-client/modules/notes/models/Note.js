define(['dojo/_base/declare'], function(declare){
    var Note = declare(null, {
        constructor: function(){
            console.debug("this is Note object #" + Note.counter++);
        }
    });

    Note.counter = 0;

    return Note;
});
