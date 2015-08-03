define(["require"], function(require) {
    var a = "hello";
    require(["./aaa/"+a+".js"], function(hello) {
        console.log(hello());
    });

    //var b = "./aaa/hello";
    //require([b+".js"], function(hello) {
    //    console.log(hello());
    //});
});