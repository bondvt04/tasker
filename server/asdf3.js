/**
 * Created by anatoliybondar on 9/11/15.
 */

var domain = require("domain");

var d = domain.create();
d.on('error', function(err) {
    console.error("###", err);
});

process.on('uncaughtException', function (err) {
    console.log("####", err);
})


d.run(function() {
    //setTimeout(function() {
    //    undefinedObj.undefinedMethod();
    //}, 5000);


    try {
        var p = new Promise(function(resolve, reject) {
            console.log("asdf");
            // А эту ошибку НЕ поймаем
            throw new Error("qwer");
        });
    } catch(e) {
        console.log("***", err);
        throw err;
    }


    //p.then(function(result) {
    //    console.log("111");
    //}).catch(function(err) {
    //    console.log("222");
    //});
});