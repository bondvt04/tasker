/**
 * NoteModel
 */
class Model {
    constructor() {

    }

    init() {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            self.resetToDefaults();
            console.log("> Notes.NoteModel.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while model.init"));
            }
        });

        return promise;
    }

    resetToDefaults() {
        this._text = "";
    }
}

define([], function(){
    var instance;
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Model()).init(...Array.prototype.slice.call(promises))));
    })();
});
