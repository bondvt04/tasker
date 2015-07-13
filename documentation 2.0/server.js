'use strict';

var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
    stats: {
        // Do not show list of hundreds of files included in a bundle
        chunkModules: false,
        colors: true
    },
    publicPath: config.output.publicPath,
    contentBase: "./hello/",
    historyApiFallback: true,
    hot: true
});

server.listen(8080, 'localhost', function (err) {
    return err ? console.error(err) : console.log('Listening on http://localhost:8080');
});
