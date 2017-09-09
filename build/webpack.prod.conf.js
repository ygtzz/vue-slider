var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var aPlugin = [
    new ExtractTextPlugin('vue-slider.css',{
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__: JSON.stringify(JSON.parse('false'))
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

module.exports = merge(baseWebapckConfig, {
    output: {
        path: config.sDest,
        library: 'VueSlider',
        libraryTarget: 'umd',
        filename: 'vue-slider.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style','css!postcss')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss!sass')},
            {
                test: /\.(svg)(\?.*)?$/,
                loaders: [
                    'url?limit=2048&name=/static/images/[name].[ext]'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loaders: [
                    'url?limit=2048&name=/static/images/[name].[ext]'
                ]
            }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('style','css!postcss'),
            sass: ExtractTextPlugin.extract('css!postcss!sass')
        }
    },
    plugins: aPlugin,
    // devtool: 'cheap-module-source-map'
});