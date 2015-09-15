var fs = require("fs");

fs.stat("./asdf2.js", function(err, statObject) {
    if(err) //console.error(err);

    console.log("###", statObject);
});
