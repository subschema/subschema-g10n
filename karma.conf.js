var webpack = require('webpack'), path = require('path'), hot = require('./example/hot.webpack.config');

module.exports = function (config) {
    config.set({
        browserNoActivityTimeout: 20000,
        browsers: ['Chrome'], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ['mocha', 'chai'], //use the mocha test framework
        files: [
            './karma.tests.js' //just load this file
        ],
        preprocessors: {
            'karma.tests.js': ['webpack'],
            'src/*': ['webpack','sourcemap'] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots'], //report results in this format

        webpack: { //kind of a copy of your webpack config
            cache: true,
            debug: true,
            devtool: 'inline-source-map',

            stats: {
                colors: true,
                reasons: true
            },
            module: hot.module,

            resolve: hot.resolve,

            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('development')
                })]

        },
        webpackMiddleware: {
            stats: {
                colors: true
            }
        }
    });

};
