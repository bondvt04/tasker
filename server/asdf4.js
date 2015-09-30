/**
 * Created by anatoliybondar on 9/30/15.
 */

var jwt = require("jsonwebtoken");


var token = jwt.sign({ foo: 'bar' }, "asdf", {
    algorithm: "HS256", // (default: HS256)
    expiresInMinutes: 0.5 //minutes
});

console.log(jwt.decode(token));

//var lol = jwt.verify(token, "asdf", function(a, b, c) {
//    console.log("lol2", a, b, c);
//});
//
//console.log("lol1:", lol);