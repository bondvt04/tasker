'use strict';

var path = require('path');
var webpack = require('webpack');

var development = {
    devtool: 'eval',
    entry: [
        "./src/index",
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

//module.exports = production;
module.exports = development;
