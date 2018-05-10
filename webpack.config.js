/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 09:26:21 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-10 17:47:29
 */

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: "js/bundle.js"
    },

    resolve: {
        extensions: ['', '.js','.jsx']
    },

    module: {
        loaders: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: 'style!css!postcss!less'
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: 'style!css!postcss' 
            },
            { 
                test: /\.(png|gif|jpg|jpeg|bmp)$/i, 
                // 限制大小5kb
                loader: 'url-loader?limit=5000' 
            },  
            { 
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
                loader: 'url-loader?limit=5000'
            } 
        ]
    },

    postcss: [
        //调用autoprefixer插件
        require('autoprefixer') 
    ],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            favicon: './favicon.ico'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
             __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        proxy: {  
            '/api': { 
                target: 'http://localhost:3000', 
                secure: false 
            } 
        },
        historyApiFallback: true, 
        inline: true, 
        hot: true  
    }
}
