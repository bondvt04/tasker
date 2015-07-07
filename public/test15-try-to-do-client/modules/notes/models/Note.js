define(['dojo/_base/declare'], function(declare){
    var NoteClass = declare(null, {
        constructor: function(){
            console.debug("this is Note object #" + NoteClass.counter++);
        }
    });

    NoteClass.counter = 0;

    return NoteClass;
});
