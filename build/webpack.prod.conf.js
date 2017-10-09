var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var aPlugin = [
    new ExtractTextPlugin({
        filename:'vue-slider.css',
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__: JSON.stringify(JSON.parse('false'))
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
];

module.exports = merge(baseWebapckConfig, {
    output: {
        path: config.sDist,
        library: 'VueSlider',
        libraryTarget: 'umd',
        filename: 'vue-slider.js'
    },
    module: {
        rules: [
            {   
                test: /\.vue$/, loader: 'vue-loader',
                options:{
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use:[
                                {loader:'css-loader'},
                                {loader:'postcss-loader'}
                            ],
                            fallback:[
                                {loader:'style-loader'}
                            ]
                        }),
                        sass: ExtractTextPlugin.extract({
                            use:[
                                {loader:'css-loader'},
                                {loader:'postcss-loader'},
                                {loader:'sass-loader'}
                            ]
                        })
                    }
                }
            },
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'}
                    ],
                    fallback:[
                        {loader:'style-loader'}
                    ]
                })
            },
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'},
                        {loader:'sass-loader'}
                    ]
                })
            },
            {
                test: /\.(svg)(\?.*)?$/,
                loader:'url',
                options: {
                    limit: 2048,
                    name: '/static/images/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:2048,
                            name:'/static/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: aPlugin,
    // devtool: 'cheap-module-source-map'
});