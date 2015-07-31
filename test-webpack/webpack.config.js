var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
    //context: __dirname + "/app",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new ContextReplacementPlugin(
            /aaa/, // change all contexts matching this RegExp
            /aaa\/hello\.js/,
            false
        )

        //new ContextReplacementPlugin(
        //    /folder[\\\/]modules$/, // change all contexts matching this RegExp
        //    /^\.\/[^\/]+\/index\.js$/ // Exchange the RegExp with this new RegExp
        //    // which matches only files in styles, templates and xyz
        //)
    ],
    //module: {
    //    loaders: [
    //        { test: /\.css$/, loader: "style!css" }
    //    ]
    //}
};

