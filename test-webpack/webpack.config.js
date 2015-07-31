module.exports = {
    //context: __dirname + "/app",
    entry: "./src/index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
    //module: {
    //    loaders: [
    //        { test: /\.css$/, loader: "style!css" }
    //    ]
    //}
};

