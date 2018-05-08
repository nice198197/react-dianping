var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[chunkhash:8].js",
        publicPath: '/dist/'
    },
    resolve:{
        extensions: ['', '.js','.jsx']
    },

    module: {
        loaders: [
            { test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less') 
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss') 
            },
            { 
                test: /\.(png|gif|jpg|jpeg|bmp)$/i, 
                loader:'url-loader?limit=5000&name=images/[name].[hash:8].[ext]' 
            },
            { 
                test: /\.(png|woff|svg|eot|ttf|woff2)\??.*$/, 
                loader: 'url-loader?limit=100&name=fonts/[name].[hash:8].[ext]' 
            },   
        ]
    },
    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by https://github.com/nice198197/"),

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            favicon: './favicon.ico'
        }),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurenceOrderPlugin(),
        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        
        // 从js里分离出css（js和js引入的css的 chunkhash 是相同的，导致无法区分css和js的更新）
        new ExtractTextPlugin('css/[name].[chunkhash:8].css'), 
        
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.[chunkhash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}