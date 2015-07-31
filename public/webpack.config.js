'use strict';

var path = require('path');
var webpack = require('webpack');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
var glob = require("glob");

//var BowerWebpackPlugin = require("bower-webpack-plugin");

var development = {
    //devtool: 'eval',
    //entry: glob.sync("(./src/index.js|./src/modules/*/index.js)"),
    entry: {
        "modules": glob.sync("./src/modules/*/index.js"),
        "app":"./src/index.js"
    }

        //glob.sync("./src/modules/*/index.js")
    //    //'webpack-dev-server/client?http://localhost:8080',
    //    //'webpack/hot/only-dev-server'
    ,
    output: {
        path: path.join(__dirname, 'builded_dev'),
        filename: 'bundle.js',
        publicPath: '/builded_dev/'
    },
    plugins: [
        //new ContextReplacementPlugin(
        //    /folder[\\\/]modules$/, // change all contexts matching this RegExp
        //    /^\.\/[^\/]+\/index\.js$/ // Exchange the RegExp with this new RegExp
        //    // which matches only files in styles, templates and xyz
        //)

        //new BowerWebpackPlugin({
        //    modulesDirectories: ['bower_components'],
        //    manifestFiles: ['bower.json', '.bower.json'],
        //    includes: /.*/,
        //    excludes: /.*\.less$/
        //}),
        //new webpack.ResolverPlugin(
        //    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        //),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //})
    ],
    //module: {
    //    loaders: [
    //        {
    //            //test: /\.jsx$/, loader: 'jsx-loader',
    //            //test: /\.jsx?$/,
    //            //loaders: ['react-hot', 'babel']
    //            //include: path.join(__dirname, 'src')
    //        }
    //    ]
    //},
    //resolve: {
    //    extensions: ['', '.js', '.jsx']
    //    //alias: {
    //    //    services_router: './services/router/index.js',
    //    //    services_network: './services/network/index.js',
    //    //    modules_notes: './modules/notes/index.js'
    //    //},
    //
    //    //root: [path.join(__dirname, "bower_components")]// add to PATH ./bower_components
    //}
};

//module.exports = production;
module.exports = development;
