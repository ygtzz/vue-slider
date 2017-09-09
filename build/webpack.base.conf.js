var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = require('./config');
var merge = require('lodash/merge');
var sBase = config.sBase;

var aPlugin = [];
var aPostcss = [autoprefixer({browsers: ['> 5%','ie 9']})];
if(config.enableRem){
    aPostcss.push(require('postcss-plugin-px2rem')(config.px2remOptions));
    aPostcss.push(require('postcss-flexible')(config.px2rem));    
}

module.exports = {
    entry: config.entry,
    output: {
        
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: aPlugin,
    postcss: function () {
        return aPostcss;
    },
    externals:{
        vue: 'Vue'
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase],
        extensions:['','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}