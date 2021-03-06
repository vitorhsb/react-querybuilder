'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const path = require('path');

module.exports = merge(webpackCommon, {
    entry: {
        index: './lib/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },

    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },

    devtool: 'cheap-module-source-map',


});