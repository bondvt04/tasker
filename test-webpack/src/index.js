define(["require"], function(require) {
    var a = "hello";
    var zlo = require(["./aaa/"+a+".js"], function(hello) {
        console.log(hello());
    });

    console.log(zlo);

    //var b = "./aaa/hello";
    //require([b+".js"], function(hello) {
    //    console.log(hello());
    //});
});