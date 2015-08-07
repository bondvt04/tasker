'use strict';

var path = require('path');
var webpack = require('webpack');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
//var glob = require("glob");

//var BowerWebpackPlugin = require("bower-webpack-plugin");

var development = {
    //devtool: 'eval',
    //entry: glob.sync("(./src/index.js|./src/modules/*/index.js)"),
    entry: "./src/index.js"
        //"modules": glob.sync("./src/modules/*/index.js"),



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
        new ContextReplacementPlugin(
            /modules/,
            /^.\/[^\/]+\/index\.js$/
        )

        // also works
        //new ContextReplacementPlugin(
        //    /modules/, // change all contexts matching this RegExp
        //    /\/[notes]+\/index\.js/,
        //    true,
        //    /\/notes\/indes\.js/
        //)

        // works:
        //new ContextReplacementPlugin(
        //    /modules/, // change all contexts matching this RegExp
        //    /\/notes\/index\.js/,
        //    false
        //)

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
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                //test: /\.jsx$/, loader: 'jsx-loader',
                //test: /\.jsx?$/,
                //loaders: ['react-hot', 'babel'],
                test: /\.js$/,
                loaders: [ 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        //extensions: ['', '.js', '.jsx']
        root: path.join(__dirname, "src"),
        alias: {
            services_router: 'services/router/index.js',
            //services_router: '/Users/bond-it/www/tasker/public/src/services/router/index.js',
            services_network: 'services/network/index.js'
        }

        //root: [path.join(__dirname, "bower_components")]// add to PATH ./bower_components
    }
};

//module.exports = production;
module.exports = development;
