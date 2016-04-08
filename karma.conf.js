var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the jasmine test framework
    files: [
      'client/tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'client/tests.webpack.js': [ 'webpack', 'sourcemap' ], //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: webpackConfig,
  });
};