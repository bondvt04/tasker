class Network {
    constructor(options) {
        //this.model = options.model;
    }

    init() {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            console.log("> !mainNetwork.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while network.init"));
            }
        });

        return promise;
    }
}

define([], function() {
    var instance;
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Network()).init(...Array.prototype.slice.call(promises))));
    })();
});
